
const inputs = document.querySelectorAll('#codeInput input');
inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && input.value === '' && index > 0) {
      inputs[index - 1].focus();
    }
  });
});

function verifyCode() {
  document.getElementById('loader').classList.remove('hidden');
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    document.getElementById('successModal').classList.remove('hidden');
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 3000);
  }, 7000);
}

function resendCode() {
  document.getElementById('loader').classList.remove('hidden');
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    const toast = document.getElementById('toast');
    toast.classList.remove('hidden');
    toast.classList.add('toast-slide');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 3000);
  }, 5000);
}
