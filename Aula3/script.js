//Array
// let array = ['string', 1, true];
// console.log(array);

let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
// console.log(array);

//ForEach
//array.forEach(function(item, index){console.log(item, index)});

//Push
// array.push('Novo item');
// console.log(array);

//Pop
// array.pop();
// console.log(array);

//Shift
// array.shift();
// console.log(array);

//Unshift
// array.unshift('Olá mundo');
// console.log(array);

//IndexOf
//console.log(array.indexOf(true));

//Splice
// array.splice(0, 3);
// console.log(array);

//Slice
// let novoArray = array.slice(0, 3);
// console.log(novoArray);

//Objeto
let objeto = {string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: "objeto interno"}};
console.log(objeto);

var string = objeto.string;
console.log(string);

var arrayInterno = objeto.array;
console.log(arrayInterno);

var {string, boolean, objectInterno} = objeto;
console.log(string, boolean, objectInterno);