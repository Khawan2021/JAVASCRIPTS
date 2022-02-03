//bolean
var vOuF = false;
console.log(typeof(vOuF));

//Number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//String
var nome = "Pedro";
console.log(typeof(nome))

//Null
var variavel;
console.log(variavel);

let variavel2 = "Cardoso";
console.log(variavel2);

const variavel3 = "Jacobinos";
console.log(variavel3);

var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = "Local";
    console.log(escopoLocalInterno);
}
escopoLocal();

//Atribuição
var atribuicao = "Meunome";

//Comparação
var comparacao = '0' == 0;
console.log(comparacao);

//Comparação Idêntica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//Adição
var adicao = 1 + 1;
console.log(adicao);

//Subtração
var subtracao = 2 - 1;
console.log(subtracao);

//Multiplicação
var multiplicar = 2 * 2;
console.log(multiplicar);

//Divisão Real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

//Divisão Inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

//Potencialização
var potencializar = 2 ** 10;
console.log(potencializar);

//Maior
var maiorQue = 5 > 2;
console.log(maiorQue);

//Menor
var menorQue = 5 < 2;
console.log(menorQue);

//Maior ou igual A
var maiorOuIgualA = 5 >= 2;
console.log(maiorOuIgualA);

//Menor ou igual A
var menorOuIgualA = 5 <= 2;
console.log(menorOuIgualA);

var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);