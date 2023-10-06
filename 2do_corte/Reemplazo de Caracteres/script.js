document.getElementById('boton_enviar').addEventListener('click', function() {
    const texto = document.getElementById('texto').value;
    const mensaje = document.getElementById('mensaje');

    const replacedString = replaceVowels(texto);

    mensaje.textContent = `Cadena resultante: ${replacedString}`;
});

function replaceVowels(texto) {
    const vowels = /[aeiouAEIOU]/g;
    return texto.replace(vowels, '🤪');
}
