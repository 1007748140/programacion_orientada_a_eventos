document.getElementById('enviar').addEventListener('click', function() {
    const fruit = document.getElementById('texto').value.toLowerCase();
    const mensaje = document.getElementById('mensaje');

    const frutas = ['manzana', 'banana', 'pera', 'naranja', 'uva', 'piña', 'limon', 'araza', 'sandia', 'melon'];

    const validar = frutas.includes(fruit);

    mensaje.textContent = validar
        ? `¡La fruta ${fruit} está en el array!`: `La fruta ${fruit} no está en el array.`;
});
