// 1. Selección de elementos del DOM
const imagenFondo = document.getElementById('fondo');
const parrafoInstruccion = document.querySelector('p');

// 2. Lista de imágenes (puedes usar URLs locales o externas)
const imagenes = [
    "https://picsum.photos/id/10/800/400",
    "https://picsum.photos/id/20/800/400",
    "https://picsum.photos/id/30/800/400",
    "https://picsum.photos/id/40/800/400"
];

let indiceActual = 0;

// 3. Evento keyup
window.addEventListener('keyup', (event) => {
    
    // Cambiamos al siguiente índice de la lista
    indiceActual = (indiceActual + 1) % imagenes.length;
    
    // Actualizamos la imagen
    imagenFondo.src = imagenes[indiceActual];
    
    // Mostramos qué tecla se presionó justo después de soltarla
    parrafoInstruccion.innerHTML = `Soltaste la tecla: <strong>${event.key}</strong>`;
    
    console.log(`Tecla liberada: ${event.key}. Imagen cambiada a la número ${indiceActual + 1}`);
});

// Inicializamos con la primera imagen al cargar
imagenFondo.src = imagenes[0];