var numero=[34,15,2,26,7,11,49,15,10,23];
var mayor=numero[0];
var menor = numero[0];
var suma = 0;
var media = 0;

for (var i = 0; i< numero.length;i++){
    suma += numero[i];
    if(mayor < numero[i]){
        mayor = numero[i];
    }
    if(menor > numero[i]){
        menor = numero[i];
    }
}
document.write("la lista tiene "+numero.length+" numeros<br/>");
document.write("El mayor es; "+mayor+" y el menor es: "+menor+" <br/>");
document.write("la media Aritmetica es: "+suma/numero.length);