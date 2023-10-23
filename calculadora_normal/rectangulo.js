const inputLadoARectangulo = document.querySelector('.inputLadoARectangulo');
const inputLadoBRectangulo = document.querySelector('.inputLadoBRectangulo');
// Botones de seleccion de operacion
const btnEqualResultAreaRect = document.getElementById('btn-result-area-operation');
const btnEqualResultPerimetroRect = document.getElementById('btn-result-perimetro-operation');

const bottonSelecAreaRect = document.querySelector('.squqre-operations-area');
const bottonSelecPerimetroRect = document.querySelector('.squqre-operations-perimetro');
// vistas de elementos
const vistaOperacionAreaRect = document.querySelector('.view-area-rectangulo-operation');
const vistaresultadoOperacionAreaRect = document.querySelector('.resultado-operaciones-area');
const vistaOperacionPerimetroRect = document.querySelector('.view-perimetro-rectangulo-operation');
const viewResultAreaOperation = document.querySelector('.view-result-area-output');

// eventos con click seleccion
bottonSelecAreaRect.addEventListener('click', vistaAreaRectangulo);
bottonSelecPerimetroRect.addEventListener('click', vistaPerimetroRectangulo);
// resultados de operaciones
btnEqualResultAreaRect.addEventListener('click', calculoAreaRectangulo);
btnEqualResultPerimetroRect.addEventListener('click', calculoPerimetroRectangulo);

function vistaAreaRectangulo(){
    vistaOperacionAreaRect.classList.remove('inactive');
    vistaresultadoOperacionAreaRect.classList.remove('inactive');
    
    vistaOperacionPerimetroRect.classList.add('inactive');
    
}
function vistaPerimetroRectangulo(){
    vistaOperacionPerimetroRect.classList.remove('inactive');
    vistaresultadoOperacionAreaRect.classList.add('inactive');
    
    
   
}

function calculoAreaRectangulo(){
    const areaRectangulo = Number(inputLadoARectangulo.value) * Number(inputLadoBRectangulo.value);
    console.log(areaRectangulo);
    limpiarResultado(); // Limpia el resultado antes de mostrarlo
    viewResultAreaOperation.innerHTML = `<p>${areaRectangulo}</p>`;
}

function calculoPerimetroRectangulo(){
    const perimetroRectangulo = 2 * (Number(inputLadoARectangulo.value) + Number(inputLadoBRectangulo.value));
    console.log(inputLadoARectangulo.value)
    console.log(inputLadoBRectangulo.value)
    console.log(perimetroRectangulo);
    limpiarResultado(); // Limpia el resultado antes de mostrarlo
    viewResultAreaOperation.innerHTML = `<p>${perimetroRectangulo}</p>`;
}

function limpiarResultado() {
    console.log('limpie')
    viewResultAreaOperation.innerHTML = '';
}