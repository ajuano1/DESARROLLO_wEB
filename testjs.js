// En testjs.js

// Variables para el tiempo
let tiempoRestante = 30;
let interval;

// Función para actualizar el contador regresivo
function actualizarContador() {
    document.getElementById('contRegresivo').textContent = `Tiempo restante: ${tiempoRestante} segundos`;
}

// Función para iniciar el tiempo
function iniciarTiempo() {
    clearInterval(interval); // Limpiar intervalo previo si existe
    tiempoRestante = 30;
    actualizarContador();
    interval = setInterval(function() {
        tiempoRestante--;
        actualizarContador();
        if (tiempoRestante === 0) {
            clearInterval(interval);
            document.getElementById('submitButton').disabled = true;
        }
    }, 1000);
}

// Manejador de evento para el botón "Iniciar"
document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('submitButton').disabled = false;
    iniciarTiempo();
});

// Manejador de evento para el formulario
document.getElementById('PregForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar envío del formulario
    clearInterval(interval); // Detener el tiempo
    alert('¡Formulario enviado!');
});
// En testjs.js

// ...

// Manejador de evento para el botón "Iniciar"
document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('submitButton').disabled = false;
    iniciarTiempo();
    
    // Habilitar los campos de respuesta
    const inputs = document.querySelectorAll('#PregForm input[type="text"]');
    inputs.forEach(input => input.removeAttribute('disabled'));
});

// ...


