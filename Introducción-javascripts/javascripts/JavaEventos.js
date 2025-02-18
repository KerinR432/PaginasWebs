/**function mifuncion(){
    texto=prompt("Que titulo quieres poner?");
    titular.innerHTML = texto;
}*/
function mifuncion2(titular) {//funciones que podemos almacenar funciones de evento
    parrafo = document.getElementById("parrafo2");
    /*console.log("Debuggeando...");  --> dejar mensaje en la consola
    debugger; // --> detiene la ejecución del código*/
    tmp = titular.innerHTML;
    titular.innerHTML = parrafo.innerHTML;
    parrafo.innerHTML = tmp;
    //esto intercambia el texto de dos objetos
    temporal = titular.className;
    alert(temporal);
    if (titular.className == 'rojo') {
        titular.className = 'azul';

    } else {
        titular.className = 'rojo';
    }
}