function registerForm() {
  return {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirm: false,

    handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match ❌");
        return;
      }

      alert('Registration successful! 🎉');
    
      window.location.href = 'login.html?registered=true';
    },

    registerWithGoogle() {
      alert('Google registration coming soon...');
    }
  };
}
