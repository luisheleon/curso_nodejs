var arr = [6, -23, 12, 45, -9, 0, 1, 4, 99];

//for

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//foreach
console.log('Foreach');

let flecha = arr.forEach((a, b) => console.log(a, b));


//filter
console.log('Filter');
let resultado = arr.filter((valor) => {
    return valor > 5;
});
console.log(resultado);
console.log(arr);


//map
console.log('Map');
let resultado2 = arr.map((valor) => {
    return valor * 100;
}).filter((x) => x > 2000);

console.log(resultado2);


// reduce

console.log('Reduce');

let fibonacci = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var resultado3 = fibonacci.reduce((acumulador, valor) => {
    acumulador.valor += valor;
    return acumulador;
}, {valor:0});

console.log(resultado3);




