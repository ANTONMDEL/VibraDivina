function Cursos(nombre, costo, duracion) {
    this.nombre = nombre;
    this.costo = costo;
    this.duracion = duracion;
    this.bienvenida = function () {
        console.log("El usuario esta interesado en el curso de " + this.nombre)
    }
}



