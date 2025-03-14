function validar1(Formulario){
    let correcto = true;
    let Usuario = Formulario.nombre.value;
    let espacio = 0;
    let patro = /^[0-9]/;
    for ( i = 0; i < Usuario.length; i++){
        if (Usuario[i] == " "){
            espacio++;
        }
    } 
    if(patro.test (Usuario)){
        correcto = false;
        alert("Tu nombre no debe llevar numero, vuelva intentar");
    }
    if(espacio != 0){
        correcto = false;
        alert("Tu nombre no debe llevar espacios en blanco, vuelve a intentarlo");
    }
    return correcto;

}
function validar1(Formulario){
    let correcto = true;
    let password = Formulario.pass1.value;
    let Usuario2 = Formulario.nombre.value;
    
        if (password.equals(Usuario2)){
            correcto = false;
            alert("Tu contraseña no puse ser igual a tu nombre, vuelvea intentarlo");

}
}