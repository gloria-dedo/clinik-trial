document.addEventListener('DOMContentLoaded', function() {
    const signupBtn = document.getElementById('bookapp');

    signupBtn.addEventListener('click', async function() {
        // Check if MetaMask is installed
        if (typeof window.ethereum !== 'undefined') {
            try {
                // Request user's account access
                const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                alert(`You are signed up with address: ${accounts[0]}`);
                
                // Redirect to another page after successful signup
               
            } catch (error) {
                console.error(error);
            }
        } else {
            alert('Please install MetaMask to sign up.');
        }
    });
});
