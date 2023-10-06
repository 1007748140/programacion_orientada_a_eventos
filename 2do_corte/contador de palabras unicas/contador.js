document.getElementById('countButton').addEventListener('click', function() {
    // Obtenemos el párrafo ingresado por el usuario
    const paragraph = document.getElementById("paragraphInput").value;

    // Limpiamos el párrafo y lo convertimos a minúsculas
    const cleanedParagraph = paragraph.toLowerCase();

    // Dividimos el párrafo en palabras
    const words = cleanedParagraph.split(/\s+/);

    // Creamos un conjunto (Set) para almacenar palabras únicas
    const uniqueWords = new Set();

    // Iteramos sobre las palabras y las agregamos al conjunto
    for (const word of words) {
        uniqueWords.add(word);
    }

    // Obtenemos el número de palabras únicas
    const uniqueWordCount = uniqueWords.size;

    // Mostramos el resultado en la página
    document.getElementById("uniqueWordCount").textContent = uniqueWordCount;
});
