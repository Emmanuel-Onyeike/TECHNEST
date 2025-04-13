
    
    setTimeout(() => {
      document.getElementById('loader').style.display = 'none';
      const mainContent = document.getElementById('mainContent');
      mainContent.classList.remove('opacity-0');
      mainContent.classList.add('opacity-100');
    }, 5000);
    document.addEventListener("DOMContentLoaded", () => {
   
      setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("mainContent").classList.remove("opacity-0");
      }, 1500);
    
     
      const profileIcon = document.getElementById("profileIcon");
      const dropdownMenu = document.getElementById("dropdownMenu");
    
      profileIcon.addEventListener("click", () => {
        dropdownMenu.classList.toggle("hidden");
      });
    
     
      window.addEventListener("click", (e) => {
        if (!profileIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
          dropdownMenu.classList.add("hidden");
        }
      });
    });
    