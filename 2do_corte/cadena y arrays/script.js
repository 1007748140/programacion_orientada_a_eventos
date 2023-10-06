document.getElementById('enviar').addEventListener('click', function() {
    const fruit = document.getElementById('texto').value.toLowerCase();
    const mensaje = document.getElementById('mensaje');

    const frutas = ['manzana', 'banana', 'pera', 'naranja', 'uva', 'mango', 'sandía', 'kiwi', 'cereza', 'melón', 'frambuesa', 'ciruela', 'limón', 'papaya', 'piña', 'durazno', 'granada', 'higo', 'guayaba', 'mora', 'morera', 'mandarina', 'toronja', 'melocotón', 'maracuyá', 'litchi', 'guanábana', 'pomelo', 'coco', 'carambola', 'kiwi', 'lima', 'membrillo', 'nectarina', 'zarzamora', 'avellana', 'cacahuate', 'almendra', 'anacardo', 'castaña', 'nuez', 'avocado', 'coco', 'dátil', 'feijoa', 'fruta de la pasión', 'níspero', 'pistacho', 'manzana verde', 'manzana roja', 'manzana amarilla', 'manzana rosa', 'manzana Fuji', 'manzana Gala', 'manzana Granny Smith'];

    const validar = frutas.includes(fruit);

    mensaje.textContent = validar
        ? `¡La fruta ${fruit} está en el array!`: `La fruta ${fruit} no está en el array.`;
});
