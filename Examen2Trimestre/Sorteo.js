function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}  
document.write("<hr>");
var numero=[10]
for(let i=0; i< numero;i++){
    numero[i]=getRandomArbitrary(1,2);
    document.write(numero[i].toFixed(0))
}
document.write("<br>")
document.write("Los alumnos de la clase son:"+numero);