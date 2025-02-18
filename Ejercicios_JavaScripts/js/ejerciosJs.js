//Ejercicios 1 de boletin 1
for (i = 0; i <= 10; i++) {
    document.write(i + " ");
}
//Ejercicios 2 de boletin 1
document.write("<hr/>");
for (i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
        document.write(i + " ");
    }
}
//Ejercicios 3 de boletin 1
/*document.write("<hr/>");
var numero = prompt("Dame un numero");
var cont = 5;
for (let i = 1; i <= 5; i++) {
    var multiplo = numero * i;
    resultado = multiplo + " ";
    document.write(resultado);
} */   
//Ejercicios 4 de boletin 1
document.write("<hr/>");
for(i=0;i<=10000;i++){
    if(i%7==0){
        document.write(i+" ");
    }
}
//Ejercicios 5 de boletin 1
/*document.write("<hr/>");
var numero1 = prompt("Dame un numero");
if(numero1%2==0){
    document.write("El numero es par "+numero1.toString());
}
else{
    document.write("El numero es impar "+numero1.toString());
}*/
//Ejercicios 6 de boletin 1
/*document.write("<hr/>");
var numero2 = prompt("Dame un numero");
if(numero2%3==0){
    document.write("El numero es divisble de 3");
}
else{
    document.write("El numero no es divisble de 3");
}*/
//Ejercicios 7 de boletin 1
/*document.write("<hr/>");
var pago = prompt("Dame el pago");
var iva = 21;
var total = pago * iva / 100;
total = total+pago;
document.write("El precio total es: "+total);*/
//ejercicio 8 de boletin 1
/*document.write("<hr/>");
var numero3 = prompt("Dame un numero");
for(i=0;i<=numero3;i++){
if(numero3%i==0){}   
cont++;
}
}
if(cont==2){
    document.write("El numero es primo");
}*/
//ejercicio 9 de boletin 1
document.write("<hr/>");
var numero4 = Math.random(50)*50;
document.write("El numero aleatorio es: "+numero4.toFixed(0));
//ejercicio 10 de boletin 1
document.write("<hr/>");
var numeroAle1 = Math.random(6)*6;
var numeroAle2 = Math.random(6)*6;
document.write("El numero aleatorio 1 es: "+numeroAle1.toFixed(0));
document.write("<br/>");
document.write("El numero aleatorio 2 es: "+numeroAle2.toFixed(0));
//ejercicio 11 de boletin 1
document.write("<hr/>");
/*var numero5 = prompt("Dame un numero");
var numero6 = prompt("Dame un numero"); 
var numeroAle3 = Math.random(numero5)*numero6;
document.write("El numero aleatorio es: "+numeroAle3.toFixed(0));*/
//ejercicio 12 de boletin 1
document.write("<hr/>");


