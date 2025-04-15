
// Show success modal after 2 seconds
setTimeout(() => {
  document.getElementById('successModal').classList.remove('hidden');
}, 2000);

// Reveal dashboard after 6 seconds
setTimeout(() => {
  document.getElementById('tokenModal').classList.add('hidden');
  document.getElementById('successModal').classList.add('hidden');
  document.getElementById('dashboardContent').classList.remove('hidden');

  // Change background to white and text to dark
  const body = document.getElementById('pageBody');
  body.classList.remove('bg-black', 'text-white');
  body.classList.add('bg-white', 'text-black');
}, 6000);
