// /**function mifuncion(){
//     texto=prompt("Que titulo quieres poner?");
//     titular.innerHTML = texto;
// }*/
// function mifuncion2(titular) {//funciones que podemos almacenar funciones de evento
//     parrafo = document.getElementById("parrafo2");
//     /*console.log("Debuggeando...");  --> dejar mensaje en la consola
//     debugger; // --> detiene la ejecución del código*/
//     tmp = titular.innerHTML;
//     titular.innerHTML = parrafo.innerHTML;
//     parrafo.innerHTML = tmp;
//     //esto intercambia el texto de dos objetos
//     temporal = titular.className;
//     alert(temporal);
//     if (titular.className == 'rojo') {
//         titular.className = 'azul';

//     } else {
//         titular.className = 'rojo';
//     }
// }
//¡CREAR EVENTOS SIN TOCAR EL HTML!
// caja1 = document.getElementById("izquerda");
// caja2 = document.getElementById("derecha");

// caja1.addEventListener("mouseover", cambiar);
// caja1.addEventListener("mouseout", cambiarNormal);
// caja2.addEventListener("mouseover", cambiar);
// caja2.addEventListener("mouseout", cambiarNormal);

// function cambiar() {
//     caja1.className = "cajaamarilla";
//     caja2.className = "cajamarilla";
//     caja1.innerHTML = "<h2>Box 1</h2>";
//     caja2.innerHTML = "<h2>Box 2</h2>";
// }

// function cambiarNromal() {
//     caja1.className = "cajanormal";
//     caja2.className = "cajanormal";
//     caja1.innerHTML = "<h2>caja 1</h2>";
//     caja2.innerHTML = "<h2>caja 2</h2>";
// }

//¡SUSCRIBIR ELEMENTOS
Caja1 = document.getElementById("izquierda");
Caja2 = document.getElementById("derecha");

Caja1.addEventListener("click", cambiar);
Caja1.addEventListener("mouseout", cambiarNormal);
Caja2.addEventListener("click", cambiar);
Caja2.addEventListener("mouseout", cambiarNormal);

function cambiar() {
    Caja1.innerHTML = "<h2>Box 1</h2>";
    Caja2.innerHTML = "<h2>Box 2</h2>";
    Caja1.style.backgroundColor='pink';
    Caja2.style.backgroundColor='lightgreen';
}

function cambiarNormal() {
    Caja1.innerHTML = "<h2>caja 1</h2>";
    Caja2.innerHTML = "<h2>caja 2</h2>";
    Caja1.style.backgroundColor='white';
    Caja2.style.backgroundColor='white';
}