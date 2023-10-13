class Animal {
    constructor(especie, edad, color){
        this.especie = especie
        this.edad = edad
        this.color = color
        this.informacion = `soy un ${this.especie}, tengo ${this.edad} años, 
        y soy de color ${this.color}`;
    }
    verInfo = ()=>{
        document.write(this.informacion + "<br>")
    }
}

class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color)
        this.raza = raza;
    }
    ladrar = ()=>{
        alert("El perro dice: ¡Wouf!");
    }
}

const perro = new Perro("perro", "7", "gris", "pitbull");
const gato = new Animal("gato", "5", "negro");
const pajaro = new Animal("pajaro", "2", "verde");

perro.verInfo();
gato.verInfo();
pajaro.verInfo();
