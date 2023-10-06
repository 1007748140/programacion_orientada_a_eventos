document.getElementById('enviar').addEventListener('click', function() {
    const oracion = document.getElementById('texto').value;
    const resultadosDiv = document.getElementById('resultados');

    const palabras = oracion.split(' ');
    resultadosDiv.innerHTML = '';

    palabras.forEach(palabra => {
        const longitud = palabra.length;
        const resultado = document.createElement('p');
        resultado.textContent = `La palabra "${palabra}" tiene una longitud de ${longitud} caracteres.`;
        resultadosDiv.appendChild(resultado);
    });
});
