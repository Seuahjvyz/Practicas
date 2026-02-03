const datos = ['Manzana', 'Ciruela', 'Naranja', 'Pera', 'Uva', 'Melón', ''];

document.getElementById('buscador').addEventListener('keyup', function () {
    const busqueda = this.value.toLowerCase();
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = '';

    if (busqueda === '') return;

    const filtrados = datos.filter(item =>
        item.toLowerCase().includes(busqueda)
    );

    filtrados.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        resultados.appendChild(li);
    });
});