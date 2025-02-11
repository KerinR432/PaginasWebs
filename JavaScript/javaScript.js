// alert("Hola Mundo");
//esto es un comentario
/**
 * comentario de varias lineas
 */
//variables
/**var j=2; //puede cambiar
let x=5; // da error cuando quieres intercambiar
const f=1;// mantiene constante
y = 4.5;
econtrado=false;
texto = "Hola Mundo";
alert(texto);
f=12;
x ="Madrid"
alert(x);
*/
/**x=34.63/12.31
alert(x.toFixed(3));
texto = "Hola"+" "+"Mundo"
alert(texto)
=== obliga a comparar no solo el contenido sino tambien el tipo de datos
document.write("<h3>Hola Mundo</h3>"); //esto escribe sobre el navegador
document.write("Esto es </br>  un <b>parrafo</b>")
encontrado = false;
if (encontrado) {
    document.write("Lo he encontrado!");
}
else {
    document.write("No lo he econtrado!");
}
*/
for (i = 0, j = 20; i < 10; i++, j--) {
    document.write(i);
    document.write("<br/>")
}
//los Strings
let texto = "Hola Mundo Cruel";//declarar un string
let final = " ";//declarar un string vacia
let texto2 = ["H", "o", "l", "a"];
for (i = 0; i < texto.length; i++) {
    if (texto[i] != " ") {
        final += texto[i];//podemos llenar un String nuevo que este vacio
    }
}
texto = final;
document.write(texto + "<br/>");

document.write("<hr>");
for (i = 0; i < texto.length; ++i) {
    document.write(texto[i] + "<br/>");//recorrer un string y mostrarlo
}
texto[5] = "x";//no se puede modificar un string
document.write("<hr>");
document.write(texto[5]);//mostramos el string pero solo en la posición 5
document.write("<hr>");
document.write(texto.charAt(1));//mostramos el string pero solo en la posición 1
/*document.write(texto.shift());//no se puede hacer un shift a un string, porque los Strings son inmutables
document.write(texto);*/
document.write(texto.toLocaleUpperCase() + "<br/>");//pasar a mayúsculas
document.write(texto.toLocaleLowerCase() + "<br/>");//pasar a minúsculas

