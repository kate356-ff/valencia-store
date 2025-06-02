document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('.login-form');

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      clearErrors();

      const email = document.getElementById('login-email');
      const password = document.getElementById('login-password');
      let hasError = false;

      if (!email.value || !isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
        hasError = true;
      }

      if (!password.value || password.value.length < 8) {
        showError(password, 'Password must be at least 8 characters long');
        hasError = true;
      }

      if (!hasError) {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (!userData || userData.email !== email.value || userData.password !== password.value) {
          showError(password, 'Invalid email or password');
          return;
        }

        window.location.href = 'index.html';
      }
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showError(inputElement, message) {
    const error = document.createElement('span');
    error.classList.add('error-message');
    error.textContent = message;
    inputElement.classList.add('input-error');
    inputElement.parentElement.appendChild(error);
  }

  function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    document.querySelectorAll('.input-error').forEach(input => input.classList.remove('input-error'));
  }
});
