const inputLadoARectangulo = document.querySelector('.inputLadoARectangulo');
const inputLadoBRectangulo = document.querySelector('.inputLadoBRectangulo');
// Botones de seleccion de operacion
const btnEqualResultAreaRect = document.getElementById('btn-result-area-operation');
const btnEqualResultPerimetroRect = document.getElementById('btn-result-perimetro-operation');
const btnEqualResultDiagonalRect = document.getElementById('btn-result-diagonal-operation');

const bottonSelecAreaRect = document.querySelector('.squqre-operations-area');
const bottonSelecPerimetroRect = document.querySelector('.squqre-operations-perimetro');
const bottonSelecdiagonalRect = document.querySelector('.squqre-operations-diagonal');
const bottonSelecAnguloAlfaRect = document.querySelector('.squqre-operations-anguloAlfa');
// vistas de elementos
const vistaOperacionAreaRect = document.querySelector('.view-area-rectangulo-operation');
const vistaresultadoOperacionAreaRect = document.querySelector('.resultado-operaciones-area');
const vistaOperacionPerimetroRect = document.querySelector('.view-perimetro-rectangulo-operation');
const vistaOperacionDiagonalRect = document.querySelector('.view-diagonal-rectangulo-operation');
const vistaOperacionAnguloAlfaRect = document.querySelector('.view-angulo-Alfa-rectangulo-operation');

const viewResultAreaOperation = document.querySelector('.view-result-area-output');

// eventos con click seleccion
bottonSelecAreaRect.addEventListener('click', vistaAreaRectangulo);
bottonSelecPerimetroRect.addEventListener('click', vistaPerimetroRectangulo);
bottonSelecdiagonalRect.addEventListener('click', vistaDiagonaRectangulo);
bottonSelecAnguloAlfaRect.addEventListener('click', vistaAnguloAlfaRectangulo);
// resultados de operaciones
btnEqualResultAreaRect.addEventListener('click', calculoAreaRectangulo);
btnEqualResultPerimetroRect.addEventListener('click', calculoPerimetroRectangulo);
btnEqualResultDiagonalRect.addEventListener('click', calculoDiagonalRectangulo);
btnEqualResultPerimetroRect.addEventListener('click', calculoPerimetroRectangulo);

function vistaAreaRectangulo(){
    vistaOperacionAreaRect.classList.remove('inactive');
    vistaresultadoOperacionAreaRect.classList.remove('inactive');
    vistaOperacionPerimetroRect.classList.add('inactive');
    vistaOperacionAnguloAlfaRect.classList.add('inactive')
    vistaOperacionDiagonalRect.classList.add('inactive')
    
}
function vistaPerimetroRectangulo(){
    vistaOperacionAreaRect.classList.remove('inactive');
    vistaOperacionPerimetroRect.classList.remove('inactive');
    vistaresultadoOperacionAreaRect.classList.add('inactive');
    vistaOperacionAnguloAlfaRect.classList.add('inactive')
    vistaOperacionDiagonalRect.classList.add('inactive')
}
function vistaDiagonaRectangulo(){
    vistaOperacionAreaRect.classList.remove('inactive');
    vistaOperacionDiagonalRect.classList.remove('inactive');
    vistaOperacionPerimetroRect.classList.add('inactive');
    vistaresultadoOperacionAreaRect.classList.add('inactive');
    vistaOperacionAnguloAlfaRect.classList.add('inactive')
}
function vistaAnguloAlfaRectangulo(){
    vistaOperacionAreaRect.classList.remove('inactive');
    vistaOperacionAnguloAlfaRect.classList.remove('inactive');
    vistaOperacionPerimetroRect.classList.add('inactive');
    vistaresultadoOperacionAreaRect.classList.add('inactive');
    vistaOperacionDiagonalRect.classList.add('inactive')
    
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
function calculoDiagonalRectangulo(){
    const ladoA = Number(inputLadoARectangulo.value);
    const ladoB = Number(inputLadoBRectangulo.value);
    const diagonalRectangulo = Math.sqrt((ladoA )**2+ (ladoB)**2);
    limpiarResultado(); // Limpia el resultado antes de mostrarlo
    viewResultAreaOperation.innerHTML = `<p>${diagonalRectangulo}</p>`;
}

function limpiarResultado() {
    console.log('limpie')
    viewResultAreaOperation.innerHTML = '';
}