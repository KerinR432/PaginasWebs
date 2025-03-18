function adivinar(numeros) {
    n = numeros.value;
  var numerAleatorio = Math.floor(Math.random() * 50) + 1;

  while (n != numerAleatorio) {
    if (n > numerAleatorio) {
      alert("El numero es menor");
    }
    if (n < numerAleatorio) {
      alert("El numero es mayor");
    }
    if (n == numerAleatorio) {
      alert("Felicidades, adivinaste el numero");
      numeros.form.resultado = false;
    }
  }
}
