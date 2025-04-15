
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    speed: Math.random() * 0.5 + 0.2
  }));
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white'; // ✅ White stars for better visibility
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.speed;
    if (star.y > canvas.height) star.y = 0;
  });
  requestAnimationFrame(animateStars);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
animateStars();



document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("mobileMenuModal").classList.remove("hidden");
});
document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("mobileMenuModal").classList.add("hidden");
});

// Demo: Show dashboard after modals
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('tokenModal').classList.add('hidden');
    document.getElementById('successModal').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('successModal').classList.add('hidden');
      document.getElementById('dashboardContent').classList.remove('hidden');
    }, 2000);
  }, 2000);
});
