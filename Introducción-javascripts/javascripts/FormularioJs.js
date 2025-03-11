//- Nombre no puede tenner esapcios en blanco ni puede empezar por un nunmero
// -contraseña no puede ser igual que el nombre, debe conincidir en ambos campos de contraseña

function validar(formulario) {
    let correcto = false
    let elemento = formulario.nombre.value;
    let espacios = 0;
    let num = "1234567890"
    for (i = 0; i < elemento.length; i++) {
        if (elemento[i] == " ") {
            espacios++;
        }
    }
    if (elemento != num) {
        correcto = true;
    } else {
        alert("Tu nombre no puede llevar numeros");
    }
    if (espacios == 0) {
        correcto = true;
    }
    else {
        alert("El nombre de tu usuario no debe tener espacio en blanco");
    }
    return correcto;

}
function deshabilitar(boton) {
    boton.form.botonenviar.disabled = true; //
}