document.getElementById('boton_vereficar').addEventListener('click', function() {
    const texto1 = document.getElementById('texto1').value.toLowerCase();
    const texto2 = document.getElementById('texto2').value.toLowerCase();
    const mensaje = document.getElementById('mensaje');

    const cadena_ordenada1 = texto1.split('').sort().join('');
    const cadena_ordenada2 = texto2.split('').sort().join('');

    const areAnagrams = cadena_ordenada1 === cadena_ordenada2;

    mensaje.textContent = areAnagrams
        ? '¡Las cadenas son anagramas!' : 'Las cadenas no son anagramas.';
    mensaje.style.color = areAnagrams ? 'green' : 'red';
});
