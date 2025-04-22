let numeros = new Array();
function inciar() {
    for (i = 0; i < 10; i++) {
        n = Math.floor(Math.random() * 50);
        numeros.push(n);
    }
    enrojo()
}


function cambiar(titular) {
    elemento = document.getElementById("parrafo");
    elemento.innerHTML = "";
    if (titular.innerHTML == "En rojo y negrita los pares y divisibles por tres") {
        enazul();
        titular.innerHTML = "En azul y curisiva los pares y divisibles por tres";
    } else {
        enrojo();
        titular.innerHTML = "En rojo y negrita los pares y divisibles por tres";
    }
}

function enrojo() {
    elemento = document.getElementById("parrafo");
    for (i = 0; i < 10; i++) {
        nuevo = document.createElement("span");
        elemento.appendChild(nuevo);
        nuevo.innerHTML = numeros[i].toString() + "<br/>";

        if (numeros[i] % 2 == 0 && numeros[i] % 3 == 0) {
            nuevo.setAttribute("class", "estilorojo")
        } else {
            nuevo.setAttribute("class", "estiloazul")
        }
    }
}

function enazul() {
    elemento = document.getElementById("parrafo");
    for (i = 0; i < 10; i++) {
        nuevo = document.createElement("span");
        elemento.appendChild(nuevo);
        nuevo.innerHTML = numeros[i].toString() + "<br/>";

        if (numeros[i] % 2 == 0 && numeros[i] % 3 == 0) {
            nuevo.setAttribute("class", "estiloazul")
        } else {
            nuevo.setAttribute("class", "estilorojo")
        }
    }
}