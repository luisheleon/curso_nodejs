//Programación orientada a objetos
//ES6 class

var Objeto = function(){

}

Objeto.prototype.Saludar = function(msn, callback){
    console.log("Hola señor: " + msn)
    if(typeof callback == 'function'){
        callback()
    }
    else
    {
         console.log('Callback no es una función')
    }

}


//Instancia del objeto
var saludo = new Objeto()
saludo.Saludar('Luis Miguel', function () {
    console.log("Función ejecutada")
})

saludo.Saludar('Pedro',5)

Objeto.prototype.Despedirse = function (msn) {
    console.log('Hasta luego: ' + msn)
}

saludo.Despedirse("Luis Hernandez")

