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
    user: " Carlos ",
    puntos: 300,
    curso: "Meditacion ",
    pago: false,
}

array.push(usuario4);
console.log('la cantidad de usuarios es de ' + ' ' + array.length);


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


let probando = document.getElementById("evento");
probando.addEventListener("click", eventoCo)

function eventoCo() {
    console.log("Hizo click");
}


// Al ingresar mis datos en profile.html se carga al button del inicio " Perfil" mi nombre de usuario.(en caso de no ser null)
const usernav = document.getElementById("usuario");

let username = localStorage.getItem('user');

if (username != null) {
    usernav.innerHTML = '<a class="nav-link active " id="usuario" href="paginas/profile.html">' + username + '</a>'

} else {
    usernav.innerHTML = ' <a class="nav-link active "  id="usuario" href="paginas/profile.html">Perfil</a>';
}


const message = document.getElementById("mensaje");
const envio = document.getElementById("dato");

dato.addEventListener("submit", function (event) {
    event.preventDefault();
    let men ={
        mensa : message.value,
    }

localStorage.setItem('nuevo', JSON.stringify(men));

});

let newMessage = JSON.parse(localStorage.getItem('nuevo'));
function envioMensaje (){

    if (newMessage != null){
        message.value= newMessage.mensa
    }
}

envioMensaje();