document.getElementById('buscar').addEventListener('click', function() {
    const texto = document.getElementById('texto').value.toLowerCase();
    const PalabraClave = document.getElementById('PalabraClave').value.toLowerCase();
    const mensaje = document.getElementById('mensaje');

    const validar_palabra = texto.includes(PalabraClave);

    mensaje.textContent = validar_palabra
        ? `La palabra clave "${PalabraClave}" aparece en la cadena 😀` : `La palabra clave "${PalabraClave}" no aparece en la cadena 😥`;
});

