# PayLedger-Immutable-Salary-Management
Transparent salary management system on Blockchain for businesses and employees
Introduction
PayLedger is a blockchain-based decentralized application (dApp) that enables employers to manage their employees' salaries in an immutable and transparent way. Built on the Ethereum blockchain, PayLedger leverages smart contracts to securely store employee salary data and automate salary payments. By utilizing the power of blockchain, PayLedger ensures that salary transactions are transparent, tamper-proof, and secure.

The application empowers companies to manage employee payroll with ease, while employees can trust the system for fair and timely payments, with every transaction being permanently recorded on the blockchain.

Features
Employee Registration: Employers can register employees with their wallet addresses and salary details, ensuring transparency and automation.
Salary Payments: Salaries can be paid directly through the contract, with automatic tracking of payment history.
Immutable Records: Once a salary record is added, it cannot be modified, ensuring transparency and trust.
Blockchain-Powered: All transactions are handled via Ethereum smart contracts, which guarantees security, immutability, and decentralization.
Employee Dashboard: Employees can view their salary details and payment history on the frontend application.
Technologies Used
Blockchain: Ethereum, Smart Contracts
Frontend: React.js
Backend: Web3.js (for interacting with Ethereum blockchain)
Smart Contract Development: Solidity
Wallet Integration: MetaMask
Deployment: Remix IDE (for contract deployment)
How It Works
1. Smart Contract:
The smart contract handles the addition of employees, salary payment management, and querying employee details. Key features of the smart contract include:

addEmployee(address, uint256): Adds an employee to the payroll system.
paySalary(address): Pays the salary to an employee.
getEmployeeDetails(address): Retrieves the salary and payment history of an employee.
2. Frontend:
The frontend application allows users to interact with the Ethereum blockchain through their MetaMask wallet. Key features include:

Viewing the connected MetaMask account.
Adding employee details and paying salaries via the smart contract.
Displaying employee salary and payment status.
3. MetaMask Integration:
MetaMask acts as the bridge between the user’s browser and the Ethereum blockchain. It enables users to interact with the deployed smart contract directly from their web browser.

Setup Instructions
Prerequisites
Install MetaMask in your browser.
Node.js (v14 or later) and npm installed on your machine.
A text editor like VS Code.
Steps to Run the Project
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/payledger.git
cd payledger
Install Dependencies:

bash
Copy code
npm install
Set Up MetaMask:

Install the MetaMask extension in your browser.
Create a wallet or import an existing wallet using your recovery phrase.
Ensure MetaMask is connected to the correct Ethereum network (Mainnet for production, Rinkeby or Goerli for testing).
Deploy the Smart Contract:

Use Remix IDE to compile and deploy the smart contract on the Ethereum network.
After deployment, copy the contract address and ABI.
Update Frontend with Contract Details:

In the src/App.js file, replace CONTRACT_ADDRESS with the address of the deployed contract.
Replace CONTRACT_ABI with the ABI of the deployed contract.
Start the Application:

bash
Copy code
npm start
This will launch the frontend application in your browser.

Interact with the DApp
Connect your MetaMask wallet.
Add employee details.
Pay salaries.
View employee salary details and payment history.
Contributions
Contributions are welcome! Please feel free to open issues, fork the repository, and submit pull requests.

License
This project is licensed under the MIT License - see the LICENSE file for details.