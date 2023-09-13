// la idea es crear variables que representen a las etiquetas del html
const tituliPrincipal = document.querySelector('h1'); // cual es el selector que quieres en seelccionar querySelector escoje al primero que se encuentra
const input = document.querySelector('input');
const input2 = document.querySelector('.input2');
const boton = document.querySelector('#calcular');
const parrafoResultado = document.querySelector('#esIgualA');
// 
const formulario = document.querySelector('.formu');
// se añade una propiedad de add eventListener
// se envian dos argumentos el primero es el evento que queremos escuchar y el otro es la funcion a ejecutar op linea de codigo
boton.addEventListener('click', botoOnClick); // escucha cada evento en el boton, la funcion va sin parentesis
// formulario.addEventListener('click', sumarInputValues);

function botoOnClick(){
    const sumaInputs = (parseInt(input.value) + parseInt(input2.value));
    parrafoResultado.innerText = "resultado: " + sumaInputs;
}
// function sumarInputValues(event){
//     console.log({event});
//     event.preventDefault();
//     const sumaInputs = (parseInt(input.value) + parseInt(input2.value));
//     parrafoResultado.innerText = "resultado: " + sumaInputs;
// }