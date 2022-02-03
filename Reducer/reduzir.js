// function somaNumero(arr){
//     return arr.reduce(function(prev, current){
//         return prev + current;
//     })
// }

// const arr = [1,2];
// console.log(somaNumero(arr));

const lista = [
    {
        name: 'Batitinha frita 1,2,3',
        preco: 30
    },
    {
        name: 'Skin da Lux',
        preco: 12
    },
    {
        name: 'Pacote de temporada',
        preco: 30
    }
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('rodada',index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));