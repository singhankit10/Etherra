import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EthereumPrice = () => {
  const [ethPrice, setEthPrice] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get(
          'https://rest.coinapi.io/v1/exchangerate/ETH/USD',
          {
            headers: {
              'X-CoinAPI-Key': '137FED62-5E6E-4E6B-A3AC-DB4A111E6C78',
            },
          }
        );
        const data = response.data;
        setEthPrice(Number(data.rate).toFixed(2)); // Round the price to 2 decimal places
      } catch (error) {
        console.error('Error fetching Ethereum price:', error);
      }
    };

    // Fetch the price every 10 seconds (adjust the interval as needed)
    const interval = setInterval(fetchPrice, 10000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);

    // Fetch the initial price
    fetchPrice();
  }, []);

  return (
    <div className="ethereum-price-container">
      {ethPrice ? (
        <div className="ethereum-price">
          <h2 className="ethereum-heading">Live Ethereum Price</h2>
          <p className="ethereum-value">${ethPrice}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EthereumPrice;
