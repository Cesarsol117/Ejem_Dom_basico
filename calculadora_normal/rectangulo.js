const inputLadoARectangulo = document.querySelector('.inputLadoARectangulo');
const inputLadoBRectangulo = document.querySelector('.inputLadoBRectangulo');
// Botones de seleccion de operacion
const btnEqualResultAreaRect = document.querySelector('#btn-result-area-operation');
const btnEqualResultPerimetroRect = document.querySelector('#btn-result-perimetro-operation');

const bottonSelecAreaRect = document.querySelector('.squqre-operations-area');
const bottonSelecPerimetroRect = document.querySelector('.squqre-operations-perimetro');
// vistas de elementos
const vistaOperacionAreaRect = document.querySelector('.view-area-rectangulo-operation');
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
    vistaOperacionPerimetroRect.classList.add('inactive');
}
function vistaPerimetroRectangulo(){
    vistaOperacionPerimetroRect.classList.remove('inactive');
    vistaOperacionAreaRect.classList.add('inactive');
    inputLadoARectangulo.value = 1;
    inputLadoBRectangulo.value = 1;
}

function calculoAreaRectangulo(){
    const areaRectangulo = Number(inputLadoARectangulo.value) * Number(inputLadoBRectangulo.value);
    console.log(areaRectangulo);
    viewResultAreaOperation.innerHTML = `<p>${areaRectangulo}</p>`;
}
function calculoPerimetroRectangulo(){
    const perimetroRectangulo = Number(inputLadoARectangulo.value) + Number(inputLadoBRectangulo.value);
    console.log(perimetroRectangulo);
    viewResultAreaOperation.innerHTML = `<p>${perimetroRectangulo}</p>`;
}
