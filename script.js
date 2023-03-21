const icon = document.getElementById('icon');
const passwordInput = document.getElementById('senha');
const emailInput = document.getElementById('email');
const entrar = document.getElementById('entrar');
const msgerro = document.getElementById('msgerro');
const verificar = /\S+@\S+\.\S+/

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

entrar.addEventListener('click', function(event) {
  event.preventDefault(); // Impede que o formulário seja enviado

  // Valida o e-mail
  if (!emailInput.value || !/\S+@\S+\.\S+/.test(emailInput.value)) {
    emailInput.style.border = '1px solid #ff0000'
    msgerroemail.textContent = 'Por favor, informe um endereço de e-mail válido.';
    return;
    
  }

  // Valida a senha
  if (!passwordInput.value) {
    passwordInput.style.border = '1px solid #ff0000'
    msgerrosenha.textContent = 'Por favor, informe a senha.';
    return;
  }

  // Aqui você pode continuar com o código para submeter o formulário
  // ...

  // Limpa a mensagem de erro (caso haja alguma)
  msgerro.textContent = '';
});

