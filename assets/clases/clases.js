// class Perro {
//     constructor(nombre) {
//         this.nombre = nombre    
//     }

//     hablar(){
//         document.writeln(this.nombre + 'ladra')
//     }
// }


// var mascota_1 = new Perro("Pancho")
// mascota_1.hablar()
// document.writeln("<br>")
// var mascota_2 = new Perro("Kika")
// mascota_2.hablar()

class Alimento {
    constructor(name) {
        this.name = name
    }
    alimento(){
        document.writeln("Hola soy " + this.name + ", Gracias por el alimento")
    }
}

var dog = new Alimento("Paco")
dog.alimento()