let nombre                      ="Cesar";                    
let apellido                    ="Pacheco";
let nombreUsuarioPlatzi = "cesarsol117";
let edad                        =32;
let correoElectrónico          ="cesar@cesar.com";
let esMayorEdad               =true;
let DineroAhorrado             =1200000;
let Deudas                      =12000000;

let nombre_completo = (nombre+" "+apellido);
let dineroReal      = DineroAhorrado - Deudas;

// --------------------------------------------

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function nombreCompleto(nombreUsuario, apellidoUsuario, nickname){
    return "Mi nombre es " +nombreUsuario+" "+apellidoUsuario+ ", pero prefiero que me digas " + nickname + ".";
}

nombreCompleto(name, lastname, nickname);

// ------------------------------------------------


switch (tipoDeSuscripcion) {
    case "Free":
      console.log("Solo puedes tomar los cursos gratis");
      break;
    case "Basic":
      console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
      break;
    case "Expert":
      console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
      break;
    case "ExpertPlus":
      console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
      break;
  }
                
const tipoDeSuscripcion = "Basic";
if (tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
else {
    console.log("No tienes ninguna suscripción");
}

function conseguirTipoSuscripcion(suscripcion) {
    if (suscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    
    if (suscripcion == 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    
    if (suscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }
    
    if (suscripcion == 'ExpertDuo') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }

    console.warn('Ese tipo de suscripción no existe')
}
            // -------------------------------------------------
const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
};

function conseguirTipoSuscripcion(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }

    console.warn('Ese tipo de suscripción no existe')
}

// --------------------------------------------------------------------------------------------

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}


let i = 0;
while (i < 5) {
  i++;
  console.log("El valor de i es: " + i);
}

let a = 5;
while (a > 0) {
  a--;
  console.log("El valor de a es: " + a);
}

while (true){
    let result = prompt("¿Cúal es el resultado de 2 + 2? ");
    if (result==="2"){
        console.log("es verdad.");
        alert("es verdad.");
        break;
    }
    else{
        
        console.log("vuelva a intentar");
        alert("vuelva a intentar");
    }

}
// --------------------------------------------------------------------

var array = ["casa", "hola", "mundo"];

function lecturaArray(lista){
    return console.log(lista[0]);
}
lecturaArray(array);

function arrayCompleto(lista){
    for(i in lista){
        console.log(lista[i])
    }
}
arrayCompleto(array);

const cesar = {
    Edad:32,
    altua:170,
    hobbie:"leer"
}
function lecturaObjeto(object) {
    for (let key in object) {
        console.log(object[key] + Object.values(object))
    }
}
lecturaObjeto(cesar);