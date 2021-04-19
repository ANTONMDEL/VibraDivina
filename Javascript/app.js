const usuario1 = {
    id: 1,
    user: "Marco",
    puntos: 750,
    curso: "meditacion",
    pago: true
};
const usuario2 = {
    id: 2,
    user: "Soledad ",
    puntos: 50,
    curso: "reiki",
    pago: false
}
const usuario3 = {
    id: 3,
    user: "Alejandro ",
    puntos: 600,
    curso: "registros",
    pago: true
}
const array = [usuario1, usuario2, usuario3];

const usuario4 = {
    id: 4,
    user: " ",
    puntos: 300,
    curso: " ",
    pago: false,
}
usuario4.user = prompt("ingresa nombre");
usuario4.curso= prompt("ingresa curso");

array.push(usuario4);
console.log('la cantidad de usuarios es de '+ ' ' + array.length);


function pagoss(array) {

    for (let valor of array) {
        if (valor.pago == false) {
            console.log(valor.user + " ," + "NO pago");
        } else {
             console.log(valor.user + " ," + "SI pago")
        }
    }
}
pagoss(array);



// ENTREGA 5 OBJETOS  

const Reiki = new Cursos("Reiki", 300, 3);
console.log(Reiki.nombre);
console.log(Reiki.costo);
console.log(Reiki.duracion);
Reiki.bienvenida();

const Meditacion = new Cursos("Meditacion", 500, 6);
console.log(Meditacion.nombre);
console.log(Meditacion.costo);
console.log(Meditacion.duracion);
Meditacion.bienvenida();


const Registros = new Cursos("Registros", 600, 8);
console.log(Registros.nombre);
console.log(Registros.costo);
console.log(Registros.duracion);
Registros.bienvenida();


//Practica Local y Session storage
localStorage.setItem('nombre', "Marco")
localStorage.setItem('edad', 19);

let name = localStorage.getItem('nombre');
let aye = localStorage.getItem('edad');
console.log(typeof eye);
console.log(typeof  nombre);

