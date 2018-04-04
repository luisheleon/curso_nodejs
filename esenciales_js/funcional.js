// programación funcional

// 1. inmutabilidad - valores

var a = [1, 2, 3, 4];
a[0] = 10; //No es funcional

// 2. Funciones como parametros
var suma = function (a, b) {
    return a + b;
};
console.log('Suma función');
console.log(suma(2, 50));

//funciones que retornan funciones

var suma1 = function (a) {
    return function (b) {
        return a + b;
    };
};
console.log('Función retorna función');
console.log(suma1(1)(5));


var suma2 = suma1(50);
console.log('Función retorna función 2');
console.log(suma2(200));


// 3. Retorna un resultado único
// raiz cuadrada de 4 = 2, puede ser 2 o -2, no es funcional si no se tiene un único resultado







