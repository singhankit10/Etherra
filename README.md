# Etherra
A DeFi platform where you can send Ethers from one account to another, and also learn about some fundamentals of ethers without any hassle.

## **Built with**

* Frontend Framework: React

* Smart Contracts: Solidity

* Ethereum web client library: Ethers.js

* CSS Framework: TailwindCSS

* Ethereum development environment: Hardhat

# **Getting Started**
To get this application up and running on your local machine follow these simple steps.
****
## Prerequisites

You need to have Node.js, NPM, and hardhat installed on your computer, also should have a Metamask account before running this project.

**Installation**
1. Clone the repo
   
   ````
    git clone https://github.com/singhankit10/Etherra 
   ````

   <br>
   
2. Install NPM packages

   Change the directory to **client**

   ````
    cd .\client\
   ````
   
   then
   
   ````
    npm install
   ````

   <br>

3. Compile the smart contract

   Change the directory to **smart_contract**

   ````
    cd..
   ````
   
   ````
   cd .\smart_contract\
   ````

   then

   ````
   npx hardhat compile
   ````

   <br>

4. Deploy the smart contract

   You can do this by logging into **https://www.alchemy.com/**

   then go to:

   **https://dashboard.alchemy.com/apps**

   Create a new app and follow the directions from there. For test Ethereums select the network as either Goerli or Sepolia.


   <br>

5. Get a contract address and paste it on ```export const contractAddress```

   To get the contract you have to run the command
   ````
   npx hardhat run scripts/deploy.js
   ````

   <br>

6. Get your private key (the private key of your logged-in metamask account) and paste it on ```accounts``` in ```hardhat.config.js```

   You will have to change the ```url``` too in case you are not using Sepolia network.

   <br>

7. Run the command 

   ````
    npm run build 
   ````

   <br>

8. And finally to run the app

   ```` 
   npm run dev
   ````
