import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import './App.css';

const CONTRACT_ADDRESS = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4';
const CONTRACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_wallet",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_salary",
				"type": "uint256"
			}
		],
		"name": "addEmployee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_wallet",
				"type": "address"
			}
		],
		"name": "paySalary",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "employee",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "salary",
				"type": "uint256"
			}
		],
		"name": "EmployeeAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "employee",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "SalaryPaid",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "employees",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "wallet",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "salary",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lastPaid",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_wallet",
				"type": "address"
			}
		],
		"name": "getEmployeeDetails",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "salary",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lastPaid",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

function App() {
  const [account, setAccount] = useState('');
  const [salary, setSalary] = useState('');
  const [lastPaid, setLastPaid] = useState('');
  const [employeeAddress, setEmployeeAddress] = useState('');
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.enable();
        setWeb3(web3Instance);

        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);

        const contractInstance = new web3Instance.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        setContract(contractInstance);
      } else {
        alert('Please install MetaMask');
      }
    };

    initWeb3();
  }, []);

  const getEmployeeDetails = async () => {
    const details = await contract.methods.getEmployeeDetails(employeeAddress).call();
    setSalary(details[0]);
    setLastPaid(new Date(details[1] * 1000).toLocaleString());
  };

  return (
    <div className="App">
      <h1>PayLedger: Employee Salary Dashboard</h1>
      <p>Connected Account: {account}</p>

      <div>
        <h3>Check Employee Details</h3>
        <input
          type="text"
          placeholder="Employee Address"
          value={employeeAddress}
          onChange={(e) => setEmployeeAddress(e.target.value)}
        />
        <button onClick={getEmployeeDetails}>Get Details</button>

        {salary && (
          <div>
            <p>Salary: {web3.utils.fromWei(salary, 'ether')} ETH</p>
            <p>Last Paid: {lastPaid}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
