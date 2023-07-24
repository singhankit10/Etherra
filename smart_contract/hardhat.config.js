// https://eth-sepolia.g.alchemy.com/v2/_sl7YXYarEGtuI2898f_kq9eBJ5wE8-K

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0',
  networks : {
    sepolia : {
      url : 'https://eth-sepolia.g.alchemy.com/v2/_sl7YXYarEGtuI2898f_kq9eBJ5wE8-K',
      accounts : [ 'db74e76cbf13c203480041f316207228940c84f98bd67c4856389c41b2c3cb82' ]
    }
  }
}