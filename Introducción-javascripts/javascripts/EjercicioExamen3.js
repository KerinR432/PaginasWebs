function validar(formulario) {
    let valido = true;
    let num1 = formulario.n1.value.trim();
    let num2 = formulario.n2.value.trim();
    let num3 = formulario.n3.value.trim();

    if(num1 =="" || num2 == "" || num3 == "") {
        valido = false;
    }
    else if(parseInt(num2) != parseInt(num1)*2){
        valido = false;
    }
    else if(parseInt(num3) != parseInt(num1)+parseInt(num2)){
        valido = false;
    }
    return valido;
}