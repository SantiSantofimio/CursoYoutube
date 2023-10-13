class Celular{
    constructor(color, peso, resPastalla, camara, ram){
        this.color = color;
        this.peso = peso;
        this.resPastalla = resPastalla;
        this.camara = camara;
        this.ram = ram;
        this.encendido = false;
    }
    verInfo(){
        return`
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Pantalla: <b>${this.resPastalla}</b><br>
        Cámara: <b>${this.camara}</b><br>
        Ram: <b>${this.ram}</b><br>
        `;
    }
    btnEncendido(){
        if (this.encendido == false){
            alert("Celular prendido");
            this.encendido = true;
        }else {
            alert("Celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if (this.encendido == true){
            alert ("reiniciando celular");
        }else{
            alert("el celular está apagado");
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolucion de ${this.camara}`);
    }
    grabarVideo(){
        alert(`grabando video en ${this.camara}`);
    }
}

class CelularAltaGama extends Celular{
    constructor(color,peso,resPastalla,camara,ram,camara2){
        super(color,peso,resPastalla,camara,ram)
        this.camara2 = camara2
    }
    grabarVideoLento(){
        alert("estás grbando en cámara lenta");
    }
    reconocimientoFacial(){
        alert("Iniciando reconocimiento facial");
    }
    infoAltaGama(){
        return this.verInfo() + `resulucion de camara extra: <b>${this.camara2}</b>`
    }
}

const celular1 = new Celular("rojo","200gm","1080x2040px","64mpx","8gb");
const celular2 =  new Celular("negro", "230gm", "1080x2090", "32mpx", "6gb");
const celular3 = new Celular("blanco", "220gm", "1080x3040px", "125mpx", "8gb");
const celular4 = new CelularAltaGama("azul","220gm","1080x3040px","130mpx","16gb", "Full HD");
const celular5 = new CelularAltaGama("negro","230gm","1090x3080px","125mpx","16gb", "Full HD 4k");

document.write(`
    Celular 1: ${celular1.verInfo()}<br>
    Celular 2: ${celular2.verInfo()}<br>
    Celular 3: ${celular3.verInfo()}<br>
    Celular Alta Gama 1: ${celular4.infoAltaGama()}<br>
    Celular Alta Gama 2: ${celular5.infoAltaGama()}<br>
`);