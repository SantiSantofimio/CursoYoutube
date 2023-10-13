const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}

alert("Que operacion vas a realizar?");

operacion = prompt("1: suma, 2: resta, 3: división, 4: multiplicación");

if (operacion == 1){
    let numero1 = prompt("ingresa primer numero");
    let numero2 = prompt("ingresa numero 2");
    resultado = sumar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}else if (operacion == 2){
    let numero1 = prompt("ingresa primer numero");
    let numero2 = prompt("ingresa numero 2");
    resultado = restar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}else if (operacion == 3){
    let numero1 = prompt("ingresa primer numero");
    let numero2 = prompt("ingresa numero 2");
    resultado = dividir(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}else if (operacion == 4){
    let numero1 = prompt("ingresa primer numero");
    let numero2 = prompt("ingresa numero 2");
    resultado = multiplicar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}else {
    alert("Ingresa un numero valido");
}