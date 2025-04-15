
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
        isLoading: false,

        handleRegister() {
          this.isLoading = true;
          setTimeout(() => {
            window.location.href = 'verification-page.html';
          }, 7000);
        },

        registerWithGoogle() {
          alert('Google registration placeholder');
        }
      };
    }
