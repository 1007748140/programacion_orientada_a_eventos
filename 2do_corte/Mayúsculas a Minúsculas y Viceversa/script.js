document.getElementById('enviar').addEventListener('click', function() {
    const palabras = document.getElementById('palabras').value;
    const resultadosP = document.getElementById('resultados');

    const palabrasArray = palabras.split(',').map(palabra => palabra.trim());
    const palabrasModificadas = palabrasArray.map(palabra => {
        return palabra.split('').map(letra => {
            return letra === letra.toUpperCase() ? letra.toLowerCase() : letra.toUpperCase();
        }).join('');
    });

    resultadosP.textContent = `Palabras originales: [${palabrasArray}] \n
   Palabras modificadas: [${palabrasModificadas}]`;
});
