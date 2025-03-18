//hay que recordar esto, es importante. Enfocate en aprender esto...
function validar(checkbox){
    if(checkbox.checked == true){
        checkbox.form.Envio.disabled = false;
    }else{
        checkbox.form.Envio.disabled = true;
    }
}
function contador(texto){
    longitud = texto.value.length;
    texto.form.real.value = longitud;
    texto.form.limite.value = 140 - longitud;
}
function comprobar(botton){
    disabled = true;
    if(esverdad = true){
        disabled = false;
    }
    return disabled;
}