// HJacer un programa que solicite ingresar dos numeros 
// num 1 es igual al num 2
// El nume1 es diferente del numero 2
// el numero 2 es mayor que el numero 1
// el numero 1 es n emor que el numero 2
// el numero 1 es mayor o igual que el numero 2

const num1 = Number (prompt('Ingrese un numero'));
const num2 = Number (prompt('Ingrese otro numero'));

if (num1 === num2){
    document.write('EL numero 1: ', num1, 'es igual al numero 2: ', num2);
} else {
    document.write('<br> EL numero 1: ', num1, 'es diferente al numero 2: ', num2);
}
const num3 = Number (prompt('Ingrese un numero'));
const num4 = Number (prompt('Ingrese otro numero'));

if (num1 > num2){
    document.write('<br> EL numero 1: ', num1, 'es mayor al numero 2: ', num2);
}else {
    document.write ('<br> EL numero 1: ', num1, 'es menor al numero 2: ', num2);
} 
const num5 = Number (prompt('Ingrese un numero'));
const num6 = Number (prompt('Ingrese otro numero'));

if (num1 <= num2){
    document.write ('<br> EL numero 1: ', num1, 'es mayor or igual al numero 2: ', num2);
} else {
    document.write ('<br> EL numero 1: ', num1, 'es menor o igual al numero 2: ', num2)
}

