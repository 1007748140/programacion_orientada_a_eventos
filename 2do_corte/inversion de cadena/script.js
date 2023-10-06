document.getElementById('enviar').addEventListener('click', function() {
    const cadena_texto = document.getElementById('cadena_texto').value;
    const mensaje = document.getElementById('mensaje');

    const invertit = reverseString(cadena_texto);

    mensaje.textContent = `Cadena invertida: ${invertit}`;
});

function reverseString(cadena_texto) {
    return cadena_texto.split('').reverse().join('');
}
