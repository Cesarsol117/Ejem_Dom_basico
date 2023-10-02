const inputLadoARectangulo = document.querySelector('#inputLadoARectangulo');
const inputLadoBRectangulo = document.querySelector('#inputLadoBRectangulo');
// Botones de seleccion de operacion
const btnEqualResultAreaRect = document.querySelector('#btn-result-area-operation');
const bottonSelecAreaRect = document.querySelector('.squqre-operations-area');
// vistas de elementos
const vistaOperacionAreaRect = document.querySelector('.view-area-rectangulo-operation');
const viewResultAreaOperation = document.querySelector('.view-result-area-output');

// eventos con click seleccion
bottonSelecAreaRect.addEventListener('click', vistaAreaRectangulo);
// resultados de operaciones
btnEqualResultAreaRect.addEventListener('click', calculoAreaRectangulo)

function vistaAreaRectangulo(){
    vistaOperacionAreaRect.classList.remove('inactive');
}

function calculoAreaRectangulo(){
    const areaRectangulo = parseInt(inputLadoARectangulo.value) * parseInt(inputLadoBRectangulo.value);
    console.log(areaRectangulo);
    viewResultAreaOperation.innerHTML = `<p>${areaRectangulo}</p>`;
}