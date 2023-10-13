class App {
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false
        this.instalada = false
    }
    abrir(){
        if (this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("app encendida");
        }
    }
    cerrar(){
        if (this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    instalar(){
        if (this.instalada == false)
        this.instalada = true
        if(this.instalada == true){
            alert("app instalada correctamente");
        }else{
            alert("ha ocurrido un error al instalar la app")
        }
    }
    desintalar(){
        if (this.instalada == true)
        this.instalada = false
        alert("app desinstalada")
    }
    appInfo(){
        return `
        Esta app tiene un total de ${this.descargas} descargas. <br>
        Con una puntuación de ${this.puntuacion} <br>
        Su peso es de ${this.peso} <br>
        `
    }
}

const app = new App("142.032", "5 estrellas", "230mb");

document.write(app.appInfo());
