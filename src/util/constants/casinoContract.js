const address = '0x98fb8a356ecb92c661ab3e449a9bd7fd17aff3df'
const ABI =[
	{
		"constant": false,
		"inputs": [],
		"name": "kill",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "checkContractBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_number",
				"type": "uint256"
			}
		],
		"name": "bet",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_minBet",
				"type": "uint256"
			},
			{
				"name": "_houseEdge",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "userWin",
				"type": "bool"
			},
			{
				"indexed": false,
				"name": "rewards",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "winningNumber",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "bettingNumber",
				"type": "uint256"
			}
		],
		"name": "bettingResult",
		"type": "event"
	}
]
export {address, ABI}