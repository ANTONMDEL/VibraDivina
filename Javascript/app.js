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


/*
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
    console.log("Envio mensaje, mira el localStorage");
} */


// Al ingresar mis datos en profile.html se carga al button del inicio " Perfil" mi nombre de usuario.(en caso de no ser null)
const usernav = $("#usuario");

let username = localStorage.getItem('user');

if (username != null) {
    usernav.prepend('<a class="nav-link active " id="usuario" href="paginas/profile.html">' + username + '</a>')

} else {
    usernav.prepend('<a class="nav-link active "  id="usuario" href="paginas/profile.html">Perfil</a>');
}


// Datos del formulario del index.
const message = $("#mensaje");
const envio = $("#dato");

envio.submit(function (event) {
    event.preventDefault();
    let men = {
        mensa: message.val(),
    }

    localStorage.setItem('nuevo', JSON.stringify(men));

});

let newMessage = JSON.parse(localStorage.getItem('nuevo'));

function envioMensaje() {

    if (newMessage != null) {
        message.value = newMessage.mensa
    }
}

envioMensaje();


//Animation Jquery
let alert = $("#alertaIndex");

alert.css("display", "none")
    .delay(100)
    .slideDown(3000);


//Juego de elegir frase
var frases = document.getElementById('frase');

function tirarFrase() {
    //generar un numero aleatorio
    var numeroAleatorio = Math.random();
    var numeroMultiplicado = (numeroAleatorio * 5) + 1;
    var numero = Math.round(numeroMultiplicado);
    //mostrar en el figure la imagen del dado
    if (numero == 1) {
        frases.innerHTML = '<img src="../img/FraseCuatro.jpg">';
    } else if (numero == 2) {
        frases.innerHTML = '<img src="img/FraseCinco.jpg">';
    } else if (numero == 3) {
        frases.innerHTML = '<img src="img/fraseNueve.jpg">';
    } else if (numero == 4) {
        frases.innerHTML = '<img src="img/fraseOcho.png">';
    } else if (numero == 5) {
        frases.innerHTML = '<img src="img/FraseSeis.jpg">';
    } else {
        frases.innerHTML = '<img src="img/FraseSiete.jpg">';
    }

}
tirarFrase();




// Probando como quitar valores repetidos de un array con objetos SET 
let nu = [1, 2, 1, 2, 1, 21, 2]

const nuevo = new Set(nu)
let nuevosNumeros = [...nuevo];

console.log(nuevosNumeros)


const IMG_JSON= "Javascript/data.json"

$('#hola').click(()=>{
    $.get(IMG_JSON, function(respuesta,estado){
        if (estado === "success"){
            let data = respuesta;
            for (const dato of data) {
                $('#gracias').prepend(` <div class="modal-body">Gracias por tu compra ${dato.user} </div>`)
            }
        }
    }
)
}

)