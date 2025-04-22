function enviar(Formulario){
    let correcto = false;
    let ns1 = Formulario.numero1.value;
    let ns2 = Formulario.numero2.value;
    let ns3 = Formulario.numero3.value;

    if(ns1 == null||n2 == null ||ns3 == null){
        correcto = true;
    }
    let rsdo = ns1+ns1;
    if(ns2 == rsdo){
        correcto = true;
    }
    let rsdo2 = ns1+ns2;
    if(ns3 = rsdo2){
        correcto = true;
    }
    return correcto;
}

function desabilitar(boton){
    boton.form.btnEnviar.disabled = correcto;
}
