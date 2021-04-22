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

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let users = Array({
        usuario: userNom.value,
    })
    localStorage.setItem("nameUser"), JSON.stringify(users);

});


function salvarUser() {
    let user = document.getElementById("user").value;
    localStorage.setItem('user', user);
    location.href = "index.html" ;

}