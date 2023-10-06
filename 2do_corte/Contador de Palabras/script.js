document.getElementById('enviar').addEventListener('click', function() {
    const texto = document.getElementById('texto').value;
    const mensaje = document.getElementById('mensaje');

    const palabras = texto.split(/\s+/);
    const num_palabras = palabras.length;

    mensaje.textContent = `Número de palabras en la frase: ${num_palabras}`;
});
