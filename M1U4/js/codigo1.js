const distancia= parseInt(prompt ('Ingrese a qué distancia se encuentra:', ''));
if(distancia>100000){
    alert('Te recomiendo ir en avión')
}else
if(distancia>30000){
    alert('Te recomiendo ir en auto')
}else
    if(distancia>10000){
       alert('Te recomiendo ir en colectivo') 
    }else
        if(distancia>1000){
            alert('Te recomiendo ir en bicicleta')
        }else{
            alert('Te recomiendo ir a pie')
        }
    