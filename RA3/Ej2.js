function iniciar(){
    for(let i =0; i< 10; i++){
    let resultado = Math.floor(Math.random() * 50);
    document.writeln(resultado+"<br>");
    if((resultado%2)==0){
        document.writeln("<b>");
    }else{
        document.writeln("<em>");
        
    }
}

}