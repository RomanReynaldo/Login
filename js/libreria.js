document.addEventListener('DOMContentLoaded', function() {
  const formulario = document.getElementById('formularioLogin');
  const mostrarPassword = document.getElementById('mostrarPassword');
  const passwordInput = document.getElementById('password');
  const estado = document.getElementById('estado');

  // Mostrar/ocultar contraseña
  mostrarPassword.addEventListener('change', function() {
    passwordInput.type = this.checked ? 'text' : 'password';
  });

  // Validación del formulario
  formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Resetear estado
    estado.className = '';
    estado.textContent = '';
    
    // Validación simple
    const username = document.getElementById('username').value.trim();
    const password = passwordInput.value.trim();
    
    if (!username || !password) {
      mostrarMensaje('Por favor complete todos los campos', 'error');
      return;
    }
    
    // Credenciales válidas (usuario: "user", contraseña: "password")
    if (username === 'user' && password === 'password') {
      mostrarMensaje('Inicio de sesión exitoso! Redirigiendo...', 'exito');
      setTimeout(() => {
        window.location.href = 'MiPaginaWeb.html';
      }, 1500);
    } else {
      mostrarMensaje('Usuario o contraseña incorrectos', 'error');
    }
  });

  function mostrarMensaje(mensaje, tipo) {
    estado.textContent = mensaje;
    estado.className = `mensaje-${tipo}`;
  }
});