// imputs
const operador1 = document.querySelector('#operator1');
const operador2 = document.querySelector('#operator2');
// imputs triangulos
const alturaImputIsoceles = document.querySelector('#isoceles-triangle-heigth-imput');
const baseImputIsoceles = document.querySelector('.isoceles-triangle-base-imput');
const aLadoImputIsoceles = document.querySelector('#isoceles-triangle-sideA-imput');

// botones
const botonPlus = document.querySelector('#sum');
const botonRest = document.querySelector('#rest');
const botonMult = document.querySelector('#mult');
const botonDivi = document.querySelector('#divi');
const botonEqual = document.querySelector('#equalBotton');
// tringulos
const resultAreaIndicator = document.querySelector('.isoceles-triangle-indicator');

// vista de resultados de operaciones
const resultadOper = document.querySelector('#result');
const resultAreaTriangleIsoceles = document.querySelector('#area-result-triangle-isoceles');
const resultAreaTriangleIsoceleSides = document.querySelector('#area-result-triangle-isoceles-sides');


// vistas y secciones

const viewCalcMain = document.querySelector('.mainBoard');
const viewChoiceTriangle = document.querySelector('.trianhgulo-section');
const trianguloIsocelesoperaciones = document.querySelector('.triangles-view');
const rectanguloOperacionSeleccion = document.querySelector('.squares-view');

// div s de cada clase
const linkMoreProject = document.querySelector('#show-sid-bar');
const sideBar = document.querySelector('.side-bar');
// ---------- menu mobile -----------
const mobileBotonMenu = document.querySelector('.navbar-hamburger');
const menuMobile = document.querySelector('.mobile-menu');
// links para camviar de vista
const linkInicioPrincipal = document.querySelector('.inicio-principal');
const linkTriangleChoice =  document.querySelector('#triangle-link');
const linkRectanguloChoice = document.querySelector('#rectangulo-link');

const linkTrianguloIsoceles = document.querySelector('.choice-triangle-isoceles');




// funciones de operacion
botonPlus.addEventListener('click', sumarInputs); 
botonRest.addEventListener('click', restInputs); 
botonMult.addEventListener('click', multInputs); 
botonDivi.addEventListener('click', divInputs);
// eventos del nav
linkInicioPrincipal.addEventListener('click', vistaInicioPaginaPrincipal);
linkMoreProject.addEventListener('mouseover', mouseoverSideBar);
mobileBotonMenu.addEventListener('click', showMobileMenu);
// eventos de los link de seleccion de figuras geometricas
linkTriangleChoice.addEventListener('click', viewTriangleCalc);
linkRectanguloChoice.addEventListener('click', vistaRectangulosOperaciones);

linkTrianguloIsoceles.addEventListener('click', vistaOperacionesTrianguloIsoceles)
// tribgulo isoceles
resultAreaIndicator.addEventListener('click', calcAreaTrianguloIsoceles);
resultAreaIndicator.addEventListener('click', calcAreaTrianguloIsocelesSides);

// funciones para nav bar
function mouseoverSideBar(){
    sideBar.classList.toggle('inactive');
    console.log('voy');
}
function showMobileMenu(){
    menuMobile.classList.toggle('inactivem');
    console.log('soy')
}
// vitas inicio principal
function vistaInicioPaginaPrincipal(){
    viewCalcMain.classList.remove('inactive');
    viewChoiceTriangle.classList.add('inactive')
    trianguloIsocelesoperaciones.classList.add('inactive')
    rectanguloOperacionSeleccion.classList.add('inactive')
}

// funciones para vistas de triangulos
function viewTriangleCalc(){
    viewCalcMain.classList.add('inactive');
    viewChoiceTriangle.classList.remove('inactive');
    trianguloIsocelesoperaciones.classList.add('inactive')
    rectanguloOperacionSeleccion.classList.add('inactive')
    
    
}
function vistaOperacionesTrianguloIsoceles(){
    viewChoiceTriangle.classList.add('inactive')
    trianguloIsocelesoperaciones.classList.remove('inactive')

}
function vistaRectangulosOperaciones(){
    viewCalcMain.classList.add('inactive');
    rectanguloOperacionSeleccion.classList.remove('inactive')
    trianguloIsocelesoperaciones.classList.add('inactive')
    viewChoiceTriangle.classList.add('inactive')
}



// funcion de calculo de triangulos
function calcAreaTrianguloIsoceles(){
    const areaIsocelesBasic = (parseInt(baseImputIsoceles.value) * parseInt(alturaImputIsoceles.value))/2;
    resultAreaTriangleIsoceles.innerText = areaIsocelesBasic;
}
function calcAreaTrianguloIsocelesSides(){
    const alturaTriangulo = Math.sqrt(((parseFloat(aLadoImputIsoceles.value)) ** 2 ) - (((parseFloat(baseImputIsoceles.value)) ** 2)/4));
    console.log(alturaTriangulo);
    const areaIsocelesSide = (parseFloat(baseImputIsoceles.value)*alturaTriangulo)/2;
    resultAreaTriangleIsoceleSides.innerText = areaIsocelesSide + " unidades cuadradas";
}
// rectangulos


// calculadora
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