//construyendo los arrays en javascript
//maneras de rellenar un array
var notas = new Array(30);
notas[5] = 5.5;
var alumnos = ["Jorge", "Ana", "Luis", "Rebeca"];

document.write("Elimino: " + alumnos.pop() + "<br/>");//elimina el último elemento
alumnos.push("Aurora");//añade un elemento al final
document.write("Elimino: " + alumnos.shift() + "<br/>");//elimina el primer elemento
alumnos.unshift("Manuel");//añade un elemento al principio

//recorrer un array y mostrarlo
for (i = 0; i < alumnos.length; i++) {
    document.write(alumnos[i] + "<br>");

}
document.write("<hr>");
document.write(alumnos.at(-1));//recuperar los elementos de un array


/*var profesores = new Array();
profesores[2] = "Paúl";
profesores[8] = "Reyes";
profesores[5] = "José Maria";
for(i=0; i<profesores.length; i++){
    document.write(profesores[i]+"<br>");
}*/
