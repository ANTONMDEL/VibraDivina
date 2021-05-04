function Cursos(nombre, costo, duracion) {
    this.nombre = nombre;
    this.costo = costo;
    this.duracion = duracion;
    this.bienvenida = function () {
        console.log("El usuario esta interesado en el curso de " + this.nombre)
    }
}


//Nombre de usuario

const userNom = $("#user");
const form = $("#login");
const telefono = $("#tel");
const mail = $("#mail");


form.submit( function (event) {

    event.preventDefault();

    let user = $("#user").val();

    localStorage.setItem('user', user);

    console.log(user)

    $(document).$("#mostrarNombre").prepend = user

});

//Guardo datos ingresados del usuario. 
form.submit( function (event) {
    event.preventDefault();

    let datos = {
        nombre: userNom.val(),
        telep: telefono.val(),
        mail: mail.val(),
    }
    localStorage.setItem("login", JSON.stringify(datos)); 

});
var dp = JSON.parse(localStorage.getItem("login"))

function devolverDatos() {
    if (dp != null) {
        userNom.val() = dp.nombre
        telefono.val() = dp.telep
        mail.val() = dp.mail
    }
}
devolverDatos();


