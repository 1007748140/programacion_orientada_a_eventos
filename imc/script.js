// Objeto para almacenar los registros
const registros = [];

// Función para registrar una persona
function registrarPersona() {
    const nombreInput = document.getElementById('nombre');
    const edadInput = document.getElementById('edad');
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');

    const nombre = nombreInput.value;
    const edad = parseInt(edadInput.value);
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (nombre) {
        const persona = {
            nombre: nombre,
            edad: edad,
            peso: peso,
            altura: altura,
            imc: 0
        };
        registros.push(persona);
        nombreInput.value = '';
        edadInput.value = '';
        pesoInput.value = '';
        alturaInput.value = '';
    // Actualizar la lista de registros en el HTML
    actualizarListaRegistros();
  } else {
      alert('Por favor, ingrese todos los campos correctamente.');
  }
}

// Función para actualizar la lista de registros en el HTML
function actualizarListaRegistros() {
  const listaRegistros = document.getElementById('listaRegistros');
  listaRegistros.innerHTML = '';

  for (const persona of registros) {
      const li = document.createElement('li');
      li.textContent = `Nombre: ${persona.nombre}, Edad: ${persona.edad}, Peso: ${persona.peso} kg, Altura: ${persona.altura} cm, IMC: ${persona.imc.toFixed(2)}`;
      listaRegistros.appendChild(li);
  }
}

// Función para calcular el IMC y mostrar el resultado
function calcularIMC() {
    const resultadoIMC = document.getElementById('resultadoIMC');
    resultadoIMC.textContent = '';

    for (const persona of registros) {
        const alturaMetros = persona.altura / 100;
        const imc = persona.peso / (alturaMetros * alturaMetros);

        persona.imc = imc;

        let estadoIMC = '';
        if (imc < 18.5) {
            estadoIMC = 'Bajo de Peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            estadoIMC = 'Peso Normal';
        } else {
            estadoIMC = 'Obeso';
        }

        resultadoIMC.textContent += `Nombre: ${persona.nombre}, Edad: ${persona.edad}, Peso: ${persona.peso} kg, Altura: ${persona.altura} cm, IMC: ${imc.toFixed(2)} (${estadoIMC})\n`;
    }
}

// Función para mostrar las personas bajo de peso
function mostrarBajoDePeso() {
    const resultadoIMC = document.getElementById('resultadoIMC');
    resultadoIMC.textContent = '';

    for (const persona of registros) {
        const alturaMetros = persona.altura / 100;
        const imc = persona.peso / (alturaMetros * alturaMetros);

        if (imc < 18.5) {
            resultadoIMC.textContent += `Nombre: ${persona.nombre}, Edad: ${persona.edad}, Peso: ${persona.peso} kg, Altura: ${persona.altura} cm, IMC: ${imc.toFixed(2)} (Bajo de Peso)\n`;
        }
    }
}

// Función para mostrar las personas obesas
function mostrarObesos() {
    const resultadoIMC = document.getElementById('resultadoIMC');
    resultadoIMC.textContent = '';

    for (const persona of registros) {
        const alturaMetros = persona.altura / 100;
        const imc = persona.peso / (alturaMetros * alturaMetros);

        if (imc >= 30) {
            resultadoIMC.textContent += `Nombre: ${persona.nombre}, Edad: ${persona.edad}, Peso: ${persona.peso} kg, Altura: ${persona.altura} cm, IMC: ${imc.toFixed(2)} (Obeso)\n`;
        }
    }
}

// Función para mostrar las personas con peso normal
function mostrarPesoNormal() {
    const resultadoIMC = document.getElementById('resultadoIMC');
    resultadoIMC.textContent = '';

    for (const persona of registros) {
        const alturaMetros = persona.altura / 100;
        const imc = persona.peso / (alturaMetros * alturaMetros);

        if (imc >= 18.5 && imc < 24.9) {
            resultadoIMC.textContent += `Nombre: ${persona.nombre}, Edad: ${persona.edad}, Peso: ${persona.peso} kg, Altura: ${persona.altura} cm, IMC: ${imc.toFixed(2)} (Peso Normal)\n`;
        }
    }
}

// Asociar la función registrarPersona al botón "Registrar"
const registrarBtn = document.getElementById('registrarBtn');
registrarBtn.addEventListener('click', registrarPersona);

// Asociar la función calcularIMC al botón "Calcular IMC"
const calcularIMCBtn = document.getElementById('calcularIMCBtn');
calcularIMCBtn.addEventListener('click', calcularIMC);

// Asociar la función mostrarBajoDePeso al botón "Quién está bajo de peso?"
const bajoDePesoBtn = document.getElementById('bajoDePesoBtn');
bajoDePesoBtn.addEventListener('click', mostrarBajoDePeso);

// Asociar la función mostrarObesos al botón "Quién está obeso?"
const obesoBtn = document.getElementById('obesoBtn');
obesoBtn.addEventListener('click', mostrarObesos);

// Asociar la función mostrarPesoNormal al botón "Quién tiene peso normal?"
const pesoNormalBtn = document.getElementById('pesoNormalBtn');
pesoNormalBtn.addEventListener('click', mostrarPesoNormal);
