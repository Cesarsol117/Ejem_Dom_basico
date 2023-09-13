// imputs
const operador1 = document.querySelector('#operator1');
const operador2 = document.querySelector('#operator2');
// botones
const botonPlus = document.querySelector('#sum');
const botonRest = document.querySelector('#rest');
const botonMult = document.querySelector('#mult');
const botonDivi = document.querySelector('#divi');
const botonEqual = document.querySelector('#equalBotton');
// vista
const resultadOper = document.querySelector('#result');
// funciones de operacion
botonPlus.addEventListener('click', sumarInputs); 
botonRest.addEventListener('click', restInputs); 
botonMult.addEventListener('click', multInputs); 
botonDivi.addEventListener('click', divInputs); 

function sumarInputs(){
    const resSuma = parseInt(operador1.value) +parseInt(operador2.value);
    resultadOper.innerText = resSuma ;
}
function restInputs(){
    const resRest = parseInt(operador1.value) - parseInt(operador2.value);
    resultadOper.innerText = resRest ;
}
function multInputs(){
    const resMult = parseInt(operador1.value) * parseInt(operador2.value);
    resultadOper.innerText = resMult ;
}
function divInputs(){
    const resDiv = parseInt(operador1.value) / parseInt(operador2.value);
    resultadOper.innerText = resDiv ;
    if (operador2.value == 0){
        resultadOper.innerText = "no se puede dividir por cero" ;
        console.log("voy aca");
    }
    else{
        resultadOper.innerText = resDiv ;
    }
}