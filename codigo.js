let cola=[]
function ordenar(){
    for(var i=0;i<tamaño();i++){
        let pos=i,aux=cola[i]
        while((pos>0)&&(cola[pos-1]>aux)){
            cola[pos]=cola[pos-1]
            pos--
        }
        cola[pos]=aux
    }
}
function encolar(valor){
    cola.push(valor)
}
function desencolar(){
    cola.shift()
}
function tamaño(){
    return cola.length
}
function nueva(){
    cola=[]
}
function mostrar(){
    let aux
    for(var a=0;a<tamaño();a++){
        aux=cola[a]
        $("#pila").append("<p>"+aux+"</p>")
    }
}
function limpiar(){
    $("#pila").empty()
}
function invertir(){
    cola.reverse()
}
$("#encolar").click(function(){
    let val=$("#valor").val()
    if(val==''){
        alert('favor de introducir un numero')
    }else{
        if(isNaN(val)){
            alert("solo introducir numeros")
        }else{
            if(tamaño()<10){
                encolar(parseFloat(val))
                $("#pila").append("<p>"+val+"</p>")
            }else{
                alert("la cola esta llena")
            }
        }
    }
})
$("#desencolar").click(function(){
    desencolar()
    limpiar()
    mostrar()
})
$("#invertir").click(function(){
   limpiar()
   invertir()
   mostrar()
})
$("#nueva").click(function(){
    nueva()
    limpiar()
})
$("#ordenar").click(function(){
    ordenar()
    limpiar()
    mostrar()
})