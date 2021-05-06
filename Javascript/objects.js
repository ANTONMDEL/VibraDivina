function Cursos(nombre, costo, duracion) {
    this.nombre = nombre;
    this.costo = costo;
    this.duracion = duracion;
    this.bienvenida = function () {
        console.log("El usuario esta interesado en el curso de " + this.nombre)
    }
}


//Nombre de usuario
const userNom = document.getElementById("user");
const form = document.getElementById("login");
const telefono = document.getElementById("tel");
const mail = document.getElementById("mail");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let user = document.getElementById("user").value;

    localStorage.setItem('user', user);

    console.log(user)

    document.getElementById("mostrarNombre").innerHTML = user

});

//Guardo datos ingresados del usuario. 
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let datos = {
        nombre: userNom.value,
        telep: telefono.value,
        mail: mail.value,
    }
    localStorage.setItem("login", JSON.stringify(datos));

});
var dp = JSON.parse(localStorage.getItem("login"))

function devolverDatos() {
    if (dp != null) {
        userNom.value = dp.nombre
        telefono.value = dp.telep
        mail.value = dp.mail
    }
}
devolverDatos();





