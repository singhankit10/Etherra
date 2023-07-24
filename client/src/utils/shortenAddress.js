export const shortenAddress = (address) => {
  if (!address) {
    return ''; // or any default value you prefer
  }
  return `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
};
