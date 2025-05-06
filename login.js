
  function handleSignIn() {
    const overlay = document.getElementById('loadingOverlay');
    overlay.classList.remove('hidden');

    setTimeout(() => {
      window.location.href = "/html/dashboard.html"; 
    }, 5000); 
  }

