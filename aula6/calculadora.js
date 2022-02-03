function calculadora(){
    const operacao = Number(prompt("Escolha uma operação:\n 1 - soma (+) \n 2 - subtração (-) \n 3 - multiplicação (*) \n 4 - divisão (/) \n 5 - Divisão Inteira (%) \n 6 - pontenciação (**)"));

    if(!operacao || operacao >= 7){
        alert("Erro - Operação inválida");
        calculadora();
    }else{ 
    let n1 = Number(prompt("Insira o primeiro valor: "));
    let n2 = Number(prompt("Insira o segundo valor: "));
    let resultado;

    if(!n1 || !n2){
        alert("Erro - parâmetros inválidos!");
        calculadora();
    }else{ function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
    }

    function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
    }

    function multiplicao(){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
    }

    function divisao(){
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
    }

    function divisaoInteira(){
        resultado = n1 % n2;
        alert(`O resultado da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
        novaOperacao();
    }

    function potenciacao(){
        resultado = n1 ** n2;
        alert(`${n1} ** ${n2} = ${resultado}`);
        novaOperacao();
    }

    function novaOperacao(){
        let opcao = prompt("Deseja fazer outra operação?\n 1 - Sim\n 2 - Não")
        if(opcao == 1){
            calculadora();
        }else if(opcao == 2){
            alert("Até mais!");
        }else{
            alert("Digite uma opção válida");
            calculadora();
        }
    }
}

   

    // if(operacao == 1){
    //     soma();
    // }else if(operacao == 2){
    //     subtracao();
    // }else if(operacao == 3){
    //     multiplicao();
    // }else if(operacao == 4){
    //     divisao();
    // }else if(operacao == 5){
    //     divisaoInteira();
    // }else if(operacao == 6){
    //     potenciacao();
    // }
    switch(operacao){
        case 1:
            soma();
            break;
            case 2:
                subtracao();
                break;
                case 3:
                    multiplicao();
                    case 4:
                        divisao();
                        break;
                        case 5:
                            divisaoInteira();
                            break;
                            case 6:
                                potenciacao();
                                break;
    }
  }  
}

calculadora();