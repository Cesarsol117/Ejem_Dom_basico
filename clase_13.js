// la idea es crear variables que representen a las etiquetas del html
const tituliPrincipal = document.querySelector('h1'); // cual es el selector que quieres en seelccionar querySelector escoje al primero que se encuentra
const input = document.querySelector('input');
const input2 = document.querySelector('.input2');
const boton = document.querySelector('#calcular');
const parrafoResultado = document.querySelector('#esIgualA');


function botoOnClick(){
    const sumaInputs = (parseInt(input.value) + parseInt(input2.value));
    parrafoResultado.innerText = "resultado: " + sumaInputs;
}