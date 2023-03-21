const icon = document.getElementById('icon');
const passwordInput = document.getElementById('senha');
icon.addEventListener('click', trocaricon);

function trocaricon() {
  if (icon.classList.contains('fa-eye-low-vision')) {
    icon.classList.remove('fa-eye-low-vision');
    icon.classList.add('fa-eye');
    passwordInput.type = 'text';
  } else {
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-low-vision');
    passwordInput.type = 'password';
  }
}
