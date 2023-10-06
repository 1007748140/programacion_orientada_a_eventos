document.getElementById('enviar').addEventListener('click', function() {
    const cadena = document.getElementById('cadenaInput').value;
    const mayusculasResult = document.getElementById('mayusculasResult');
    const minusculasResult = document.getElementById('minusculasResult');

    const cadenaEnMayusculas = cadena.toUpperCase();
    const cadenaEnMinusculas = cadena.toLowerCase();

    mayusculasResult.textContent = `En mayúsculas: ${cadenaEnMayusculas}`;
    minusculasResult.textContent = `En minúsculas: ${cadenaEnMinusculas}`;
});
