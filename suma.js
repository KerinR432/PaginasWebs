// Inicio
// Mostrar "Introduce un n"
let num1 = prompt("Introduce un número");

// Convertir la entrada a un número
num1 = parseInt(num1);

// If ((num1 mod 2) == 0) entonces
if (num1 % 2 === 0) {
    // mostrar "es par"
    console.log("El número es par");
} else {
    // Mostrar "es impar"
    console.log("El número es impar");
}
