function parrafo(){
    var numeros = [12,15,2,26,7,11,2,15,5,3,45,100,150,500];
    let numMayor = 0;
    let numMenor = 100;
    let suma = 0;
    let resultado = 0;

    for(let i = 0; i<numeros.length;i++){
        if(numeros[i]>numMayor){
            numMayor = numeros[i];
        }
        if(numeros[i]<numMenor){
            numMenor = numeros[i]
        }

        suma = numeros[i]+suma;
        resultado = suma/numeros.length;
    }
    document.writeln("<hr>");
    document.writeln("El media es: "+resultado);
    document.writeln("<hr>");
    document.writeln("El nuemero mayor es: "+numMayor);
    document.writeln(" , " +numMenor+" <-- este es el menor");
    document.writeln("<hr>");
    document.writeln("La lista de numero tiene: "+numeros.length);    
    
}