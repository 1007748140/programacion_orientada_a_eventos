document.getElementById('boton_de_validacion').addEventListener('click', function() {
    const contraseña = document.getElementById('contraseñaInput').value;
    const resultMessage = document.getElementById('mensaje');

    const hasUpperCase = /[A-Z]/.test(contraseña);
    const hasNumber = /\d/.test(contraseña);
    const isLongEnough = contraseña.length >= 8;
    const hasNoSpaces = !/\s/.test(contraseña);

    const isValid = hasUpperCase && hasNumber && isLongEnough && hasNoSpaces;

    mensaje.textContent = isValid ? '¡La contraseña es válida!' : 'La contraseña no cumple con los criterios.';
    mensaje.style.color = isValid ? 'green' : 'red';
});
