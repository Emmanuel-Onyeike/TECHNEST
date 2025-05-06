


  // Track the progress bar percentage
  let progress = 25; // Starting value for the progress bar

  // Handle the claim button click
  document.getElementById("claimButton").addEventListener("click", function() {
    if (progress === 100) {
      // If courses are complete, show the congratulatory message
      document.getElementById("verificationPopup").classList.remove("hidden");

      // Update the progress bar and message
      document.getElementById("progressBar").classList.add("text-green-400");
      document.getElementById("progressText").textContent = "100%";
      document.getElementById("progressBar").setAttribute("stroke-dashoffset", "0");

      // Simulate showing the award on the user's profile
      setTimeout(function() {
        // Hide the verification popup after 7 seconds
        document.getElementById("verificationPopup").classList.add("hidden");

        // Redirect to awards page after the message disappears
        window.location.href = "Awards.html";
      }, 7000);
    } else {
      // If courses are not complete, show a sad emoji message
      document.getElementById("noCoursesMessage").classList.remove("hidden");

      setTimeout(function() {
        document.getElementById("noCoursesMessage").classList.add("hidden");
      }, 7000);
    }
  });

  // On the awards page, reset progress
  if (window.location.pathname.includes("Awards.html")) {
    // Reset the progress bar to 0% and remove the red dot
    document.getElementById("progressBar").classList.remove("text-green-400");
    document.getElementById("progressBar").classList.add("text-red-400");
    document.getElementById("progressText").textContent = "0%";
    document.getElementById("progressBar").setAttribute("stroke-dashoffset", "25");
  }
 
                  // Select necessary elements
                  const claimBtn = document.getElementById('claimBtn');
                  const successMessage = document.getElementById('successMessage');
                  const awardPoints = document.getElementById('awardPoints');
              
                  // Click event for the Claim button
                  claimBtn.addEventListener('click', function() {
                      // Show the success message
                      successMessage.classList.remove('hidden');
                      
                      // Animate success message (fade out after 5 seconds)
                      setTimeout(function() {
                          successMessage.classList.add('hidden');
                      }, 5000);  // 5 seconds delay
              
                      // Update awarded points with 10% after clicking
                      let points = 0;
                      const targetPoints = 10;
                      const interval = setInterval(function() {
                          points += 1;
                          awardPoints.textContent = `+${points}%`;
              
                          // Stop once the points reach 10
                          if (points >= targetPoints) {
                              clearInterval(interval);
                          }
                      }, 50);  // Points increment every 50ms
                  });
          

                 
                  document.addEventListener('DOMContentLoaded', () => {
        const deactivateBtn = document.getElementById('deactivateBtn');
        const activateBtn = document.getElementById('activateBtn');
      
        const progressText = document.getElementById('progressText');
        const message = document.getElementById('message');
    
        let progress = 100;
    
        // Function to decrease progress
        function decreaseProgress() {
            const interval = setInterval(() => {
                if (progress > 0) {
                    progress -= 1;
                    progressText.textContent = `${progress}%`;
                } else {
                    clearInterval(interval);
                    showDeactivatedMessage();
                }
            }, 100);
        }
    
        // Function to show deactivated message
        function showDeactivatedMessage() {
            message.classList.add('show');
            setTimeout(() => {
                message.classList.remove('show');
            }, 3000); // Hide message after 3 seconds
        }
    
        // Deactivate button click event
        deactivateBtn.addEventListener('click', () => {
            deactivateBtn.disabled = true; // Disable deactivate button
            activateBtn.disabled = false; // Enable activate button
            decreaseProgress();
        });
    
        // Activate button click event
        activateBtn.addEventListener('click', () => {
            progress = 100;
            progressText.textContent = `${progress}%`;
            deactivateBtn.disabled = false; // Enable deactivate button
            activateBtn.disabled = true; // Disable activate button
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const viewBtn = document.getElementById('viewBtn');
        const progressContainer = document.getElementById('progressContainer');
        const progressBar = document.getElementById('progressBar');
        const progressText = document.getElementById('progressText');
    
        let progress = 0;
        let progressInterval = null;
    
        // When the user hovers over the "View" button
        viewBtn.addEventListener('mouseenter', () => {
            // Show the progress bar
            progressContainer.style.visibility = 'visible';
            progressContainer.classList.remove('hidden');
    
            // Start increasing the progress
            progressInterval = setInterval(() => {
                if (progress < 100) {
                    progress += 1; // Increment progress
                    progressBar.style.width = `${progress}%`; // Update the progress bar width
                    progressText.textContent = `${progress}%`; // Update the percentage text
                } else {
                    clearInterval(progressInterval); // Stop once the progress hits 100%
                }
            }, 100); // Adjust speed by changing the interval (in ms)
        });
    
        // When the mouse leaves the "View" button
        viewBtn.addEventListener('mouseleave', () => {
            // Reset the progress bar if the user leaves before completion
            clearInterval(progressInterval);
            progress = 0;
            progressBar.style.width = `${progress}%`;
            progressText.textContent = `${progress}%`;
            progressContainer.style.visibility = 'hidden'; // Hide the progress bar after hover
        });
    });
    
                 
   
                  document.getElementById('activateBtn').addEventListener('click', function() {
                    // Show the progress container
                    document.getElementById('progressContainer').classList.remove('hidden');
                    
                    // Initial values
                    let progress = 0;
                    const progressBar = document.getElementById('progressBar');
                    const progressTextDisplay = document.getElementById('progressTextDisplay');
                    const progressText = document.getElementById('progressText');
                    
                    // Update progress text and bar
                    const interval = setInterval(function() {
                      // Increment progress
                      progress += 1;
                
                      // Update the progress bar width
                      progressBar.style.width = progress + '%';
                
                      // Update the progress text
                      progressTextDisplay.textContent = progress + '%';
                      progressText.textContent = progress + '%';
                
                      // When progress reaches 100%, stop the animation
                      if (progress >= 100) {
                        clearInterval(interval);
                      }
                    }, 50); // Adjust the speed by changing the interval time (in ms)
                  });
             

             
                  let notificationsCount = 1;
                  let messagesCount = 1;
              
                  const notifBadge = document.getElementById('notifBadge');
                  const msgBadge = document.getElementById('msgBadge');
                  const bellBadge = document.getElementById('bellBadge');
              
                  const notifTab = document.getElementById('notifTab');
                  const msgTab = document.getElementById('msgTab');
              
                  // Function to update badge visibility
                  function updateBadges() {
                      notifBadge.textContent = notificationsCount;
                      msgBadge.textContent = messagesCount;
                      bellBadge.textContent = notificationsCount + messagesCount;
              
                      notifBadge.classList.toggle('hidden', notificationsCount === 0);
                      msgBadge.classList.toggle('hidden', messagesCount === 0);
                      bellBadge.classList.toggle('hidden', (notificationsCount + messagesCount) === 0);
                  }
              
                  // On tab click, mark as read
                  notifTab.addEventListener('click', () => {
                      notificationsCount = 0;
                      updateBadges();
                  });
              
                  msgTab.addEventListener('click', () => {
                      messagesCount = 0;
                      updateBadges();
                  });
              
                  // Simulate initial state
                  updateBadges();
              
                  // OPTIONAL: Simulate new notifications arriving after a while
                  // setTimeout(() => {
                  //     messagesCount += 2;
                  //     updateBadges();
                  // }, 10000);
          
                