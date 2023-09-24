// Save this code in a file named `interactWithContract.js`

document.addEventListener('DOMContentLoaded', function() {
    const bookNowBtn = document.getElementById('bookapp');

    bookNowBtn.addEventListener('click', async function(event) {
        event.preventDefault();

        const name = document.getElementById('name-input').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const email = document.getElementById('email-input').value;
        const phone = document.getElementById('phone-input').value;
        const doctor = document.getElementById('doctor-select').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const problemDescription = document.querySelector('textarea').value;

        const provider = new ethers.providers.Web3Provider(window.ethereum);

        try {
            // MetaMask requires requesting permission to connect users accounts
            await provider.send("eth_requestAccounts", []);

            const signer = provider.getSigner();

            const abi = [
                [
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "_name",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "_age",
                                "type": "uint256"
                            },
                            {
                                "internalType": "string",
                                "name": "_gender",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "_doctor",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "_email",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "_phone",
                                "type": "uint256"
                            }
                        ],
                        "name": "inputData",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "patientAddress",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "age",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "string",
                                "name": "gender",
                                "type": "string"
                            },
                            {
                                "indexed": false,
                                "internalType": "string",
                                "name": "doctor",
                                "type": "string"
                            },
                            {
                                "indexed": false,
                                "internalType": "string",
                                "name": "email",
                                "type": "string"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "phone",
                                "type": "uint256"
                            }
                        ],
                        "name": "PatientDataAdded",
                        "type": "event"
                    },
                    {
                        "inputs": [],
                        "name": "getPatientData",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "age",
                                "type": "uint256"
                            },
                            {
                                "internalType": "string",
                                "name": "gender",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "doctor",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "email",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "phone",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "patientCount",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
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
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "name": "patients",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "age",
                                "type": "uint256"
                            },
                            {
                                "internalType": "string",
                                "name": "gender",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "doctor",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "email",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "phone",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ]
            ];

            const contractAddress = '0xb00cf26cbfd34ce516b686261f196fa3e6adb1250a3dea612c0324b1b9e16142';

            const contract = new ethers.Contract(contractAddress, abi, provider);

            await contract.inputData(name, parseInt(30), gender, doctor, email, parseInt(phone));
            
            const accounts = await provider.listAccounts();
            const userAddress = accounts[0];
            
            alert(`Booking successful!\n\nYour MetaMask address: ${userAddress}`);
        } catch (error) {
            console.error('Error:', error);
            alert('Error booking appointment. Please try again.'); // Prompt the user in case of an error
        }
    });
});
