const textoInstruccion = document.getElementById('instruccion');
const imagenFoco = document.getElementById('foco');

document.addEventListener('keydown', (event) => {
    
    if (event.key === '1') { 
        imagenFoco.src = "/img/FocoEncendido1.png"; 
        textoInstruccion.innerText = "Presiona el número 0 para apagar el foco";
        
    } else if (event.key === '0') { 
        imagenFoco.src = "/img/FocoApagado0.png";
        textoInstruccion.innerText = "Presiona el número 1 para encender el foco";
    }
    
});