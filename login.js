
  function handleSignIn() {
    const overlay = document.getElementById('loadingOverlay');
    overlay.classList.remove('hidden');

    setTimeout(() => {
      window.location.href = "dashboard.html"; 
    }, 5000); 
  }

