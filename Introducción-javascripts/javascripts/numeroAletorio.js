function iniciar() {
  intentos.innerHTML = 0;
  resultado.innerHTML = Math.floor(Math.random() * 50);
}
function jugar(boton) {
  numusuario = boton.form.numero.value;
  veces = parseInt (intentos.innerHTML);
  azar = parseInt(resultado.innerHTML);
  veces++;
  intentos.innerHTML = veces;
  if(azar > numusuario) {
    alert("te has quedo corto");
  } else if (azar < numusuario) {
    alert("te has pasado tio");
  } else {
    alert("Bravo. Lo has conseguido tio! tus numeros de intentos son: " + veces);
    boton.disabled = true;
  }
}
