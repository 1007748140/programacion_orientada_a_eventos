document.getElementById('enviar').addEventListener('click', function() {
    const numerosInput = document.getElementById('numeros').value;
    const resultadosP = document.getElementById('resultados');

    const numerosArray = numerosInput.split(',').map(numero => parseInt(numero.trim()));
    const numerosDuplicados = numerosArray.map(numero => numero * 2);

    resultadosP.textContent = `Array original: [${numerosArray}]
                                Array duplicado: [${numerosDuplicados}]`;
});
