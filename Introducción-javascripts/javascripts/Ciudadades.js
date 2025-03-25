function cambiarContinene(elemento){
   continente = elemento.value;
   if(continente == "Europa"){
    Marrakech.disabled = true;
    Madrid.disabled = false;
   }
   if(continente == "America"){
   
   }
   if(continente == "Asia"){
    
   }
   if(continente == "Africa"){
    Marrakech.disabled = false;
    Ciudad_del_Cabo.disabled = false;
    El_Cairo.disabled = false; 
    Madrid.disabled = true;
    Londres.disabled = true;
    Berlin.disabled = true;
   }
   if(continente == "Oceania"){
    
   }else{

   }
}
