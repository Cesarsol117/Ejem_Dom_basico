// la idea es crear variables que representen a las etiquetas del html
const tituliPrincipal = document.querySelector('h1'); // cual es el selector que quieres en seelccionar querySelector escoje al primero que se encuentra
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const esUnId = document.getElementById('esunid');
const input = document.querySelector('input');
const input2 = document.getElementsByClassName('.input2');
const spancito = document.getElementById('spantoso');

console.log({
    tituliPrincipal,
    p,
    parrafito,
    esUnId,
    input
});
// podemos modificar cada una de los atributos del del la varaible
// input2.value = 1;

console.log(typeof(input.value));
let suma = input.value + input2.value;
console.log(suma);
// alert(suma);
// --------------practica--------------
const esIguaA = document.createElement('p');
esIguaA.setAttribute('class', 'igualA')
console.log(esIguaA)

spancito.innerHTML = "";
spancito.append(esIguaA);
esIguaA.innerHTML = suma;
// ---------------------------------------



//  tituliPrincipal.innerText = "hola"; //convierte a texto
tituliPrincipal.innerHTML = "hola  <a>mundo</a>"; //convierte a Html


// creamos un elemento nuevo y lo ponemos en una variable
const img = document.createElement('img');
// modificamos el atributo, seleccionamos lo que va a ir en este caso una imagen
img.setAttribute('src',' https://drive.google.com/uc?id=13J8pHQ9x1EidnFpwjbojkkkt2ebaVdh5');
console.log(img); // imprimimos
// enviamos un string vacio para borrar y despues con append le añadimos la imagen o el contenido reemplazando.
esUnId.innerHTML ="";
esUnId.append(img);


