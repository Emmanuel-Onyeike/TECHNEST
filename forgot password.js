
function forgotPassword() {
  return {
    email: '',
    code: '',
    loading: false,
    showCodeInput: false,
    showToast: false,
    toastMessage: '',

    handleSubmit() {
      this.loading = true;

    
      setTimeout(() => {
        this.loading = false;
        this.showCodeInput = true;
        this.toastMessage = '✅ Verification code sent to your email!';
        this.showToast = true;

        setTimeout(() => {
          this.showToast = false;
        }, 3000);
      }, 1500);
    },

    checkCode() {
      if (this.code.length === 6) {
       
        setTimeout(() => {
          window.location.href = "reset-password.html"; 
        }, 800);
      }
    }
  }
}
