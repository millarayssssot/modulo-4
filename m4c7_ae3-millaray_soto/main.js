// --- PASO 1: EVENTOS EN JAVASCRIPT ---

// 1. Agregar un Event Listener al botón
const boton = document.getElementById('boton');
boton.addEventListener('click', () => {
    alert('¡Has hecho clic en el botón!'); //
});

// 2. Manejo de Eventos: Segundo enlace (Cambiar color al pasar el mouse)
const enlaces = document.querySelectorAll('.enlace');
const segundoEnlace = enlaces[1];
segundoEnlace.addEventListener('mouseover', () => {
    segundoEnlace.style.color = 'green';
});
segundoEnlace.addEventListener('mouseout', () => {
    segundoEnlace.style.color = ''; // Vuelve al color original
});

// 3. Primer párrafo: Doble clic cambia color
const primerParrafo = document.querySelector('.parrafo');
primerParrafo.addEventListener('dblclick', () => {
    primerParrafo.style.color = 'orange';
});


// --- PASO 2: MANIPULACIÓN DE ELEMENTOS ---

// 1. Selección de Elementos
const todosLosEnlaces = document.getElementsByClassName('enlace'); 
const elementos = document.getElementsByClassName('elemento');
const segundoElemento = elementos[1]; 

// 2. Manipulación de contenido y estilos 
// Cambiar contenido del primer párrafo
primerParrafo.textContent = "Nuevo Párrafo";

// Cambiar color del segundo párrafo a rojo 
const todosLosParrafos = document.querySelectorAll('.parrafo');
if (todosLosParrafos[1]) {
    todosLosParrafos[1].style.color = 'red';
}

// Agregar clase 'resaltado' al primer enlace
const primerEnlace = enlaces[0];
primerEnlace.classList.add('resaltado');

// Agregar nuevo párrafo al final del body
const nuevoP = document.createElement('p');
nuevoP.textContent = "Este es un nuevo párrafo";
document.body.appendChild(nuevoP);
