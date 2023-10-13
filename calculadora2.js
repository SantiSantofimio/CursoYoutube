class Calculadora {
    constructor(){

    }
    sumar   (num1,num2){
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1,num2){
        return parseInt(num1) - parseInt(num2);
    }
    dividir(num1,num2){
        return parseInt(num1) / parseInt(num2);
    }
    multiplicar(num1,num2){
        return parseInt(num1) * parseInt(num2);
    }
    potenciar(num,exp){
        return num**exp;
    }
    raizCuadrada(num){
        return Math.sqrt(num);
    }
    raizCubica(num){
        return Math.cbrt(num);
    }
}

const calculadora = new Calculadora();

alert("Que operacion vas a realizar?");

operacion = prompt("1: suma, 2: resta, 3: división, 4: multiplicación, 5: potenciacion, 6: raíz cuadrada, 7: raíz cubica");

if (operacion == 1){
    let numero1 = prompt("ingresa primer numero");
    let numero2 = prompt("ingresa numero 2");
    resultado = calculadora.sumar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}else if (operacion == 2){
    let numero1 = prompt("ingresa primer numero");
    let numero2 = prompt("ingresa numero 2");
    resultado = calculadora.restar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}else if (operacion == 3){
    let numero1 = prompt("ingresa primer numero");
    let numero2 = prompt("ingresa numero 2");
    resultado = calculadora.dividir(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}else if (operacion == 4){
    let numero1 = prompt("ingresa primer numero");
    let numero2 = prompt("ingresa numero 2");
    resultado = calculadora.multiplicar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}else if (operacion == 5){
    let numero1 = prompt("ingresa el número a potenciar");
    let numero2 = prompt("ingresa el exponente");
    resultado = calculadora.potenciar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}else if (operacion == 6){
    let numero1 = prompt("ingresa el número del que deseas conocer su raíz cuadrada");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`la raíz cuadrada de ${numero1} es ${resultado}`);
}else if (operacion == 7){
    let numero1 = prompt("ingresa el número del que deseas conocer su raíz cubica");
    resultado = calculadora.raizCubica(numero1);
    alert(`la raíz cubica de ${numero1} es ${resultado}`);
}else {
    alert("Ingresa un numero valido");
}