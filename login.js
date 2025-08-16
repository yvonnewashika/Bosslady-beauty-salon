// Get references to buttons and form containers
const loginButton = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');
const loginForm = document.getElementById('login');
const registerForm = document.getElementById('register');

// Show registration form, hide login form
registerButton.addEventListener('click', function () {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

// Show login form, hide registration form
loginButton.addEventListener('click', function () {
  loginForm.style.display = "block";
  registerForm.style.display = "none";
});

loginForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent actual form submission
  // Simulate login success
  window.location.href = "home.html";
});

registerForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent actual form submission
  // Simulate registration success
  window.location.href = "home.html";
});
