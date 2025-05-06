
        // Function to change the background image and store it in localStorage
        function changeBackground() {
            const newImageUrl = prompt("Enter the URL of the new background image:");
            if (newImageUrl) {
                // Save the new image URL in localStorage
                localStorage.setItem('backgroundImage', newImageUrl);
                // Apply the new background image
                document.getElementById("backgroundSection").style.backgroundImage = `url('${newImageUrl}')`;
            }
        }

        // When the page loads, check if there's a stored background image and apply it
        window.onload = function() {
            const savedImage = localStorage.getItem('backgroundImage');
            if (savedImage) {
                document.getElementById("backgroundSection").style.backgroundImage = `url('${savedImage}')`;
            }
        }
    // Function to change the profile image and store it in localStorage
    function changeProfileImage(event) {
        // Create a file input dynamically
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';

        // When a file is selected
        input.onchange = function(e) {
            const file = e.target.files[0];
            if (file) {
                // Create a URL for the selected file
                const imageUrl = URL.createObjectURL(file);
                
                // Save the image URL in localStorage
                localStorage.setItem('profileImage', imageUrl);

                // Apply the new image to the profile
                document.getElementById("profileImage").src = imageUrl;
            }
        };

        // Trigger the file input click event
        input.click();
    }

    // When the page loads, check if there's a saved profile image and apply it
    window.onload = function() {
        const savedImage = localStorage.getItem('profileImage');
        if (savedImage) {
            document.getElementById("profileImage").src = savedImage;
        }
    }

    
  document.addEventListener('DOMContentLoaded', () => {
    const followBtn = document.querySelector('.follower-count');
    const followerCountEl = document.querySelector('.actual-follower-count'); // Make sure this class is on the span that shows the count

    followBtn.addEventListener('click', () => {
      // Change button style to green
      followBtn.classList.remove('from-purple-500', 'to-pink-500');
      followBtn.classList.add('bg-green-500');

      // Change text to "Following"
      followBtn.querySelector('span').innerText = 'Following';

      // Disable the button to prevent repeat follows
      followBtn.disabled = true;

      // Update follower count
      if (followerCountEl) {
        let count = parseInt(followerCountEl.textContent);
        followerCountEl.textContent = count + 1;
      }
    });
  });


  const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const modal = document.getElementById('profileModal');
const modalContent = document.getElementById('modalContent');
const saveButton = document.getElementById('saveButton');
const loadingIcon = document.getElementById('loadingIcon');
const successMessage = document.getElementById('successMessage');
const editProfileForm = document.getElementById('editProfileForm');

// Open modal and pre-fill form
openModalBtn.addEventListener('click', () => {
    // Pre-fill form with current values
    document.getElementById('inputName').value = document.getElementById('displayName').textContent.trim();
    document.getElementById('inputLocation').value = document.getElementById('displayLocation').textContent.trim();
    document.getElementById('inputJob').value = document.getElementById('displayJob').textContent.trim();
    document.getElementById('inputSchool').value = document.getElementById('displaySchool').textContent.trim();
    document.getElementById('inputBio').value = document.getElementById('displayBio').textContent.trim();

    modal.classList.remove('hidden');
    setTimeout(() => {
        modalContent.classList.remove('scale-90', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
});

// Close modal
closeModalBtn.addEventListener('click', () => {
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-90', 'opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
});

// Handle form submission and update profile
editProfileForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Show loading icon and simulate form submission
    loadingIcon.classList.remove('hidden');

    // Simulate a delay for the "saving" process (e.g., 7 seconds)
    setTimeout(() => {
        // Update live profile display
        document.getElementById('displayName').textContent = document.getElementById('inputName').value;
        document.getElementById('displayLocation').innerHTML = '<i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>' + document.getElementById('inputLocation').value;
        document.getElementById('displayJob').innerHTML = '<i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>' + document.getElementById('inputJob').value;
        document.getElementById('displaySchool').innerHTML = '<i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>' + document.getElementById('inputSchool').value;
        document.getElementById('displayBio').textContent = document.getElementById('inputBio').value;

        // Hide loading icon and show success message
        loadingIcon.classList.add('hidden');
        successMessage.classList.remove('hidden');

        // Automatically hide the success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.add('hidden');
            // Close the modal after form submission
            closeModalBtn.click();
        }, 5000);

    }, 7000); // 7 seconds delay to simulate loading time
});
