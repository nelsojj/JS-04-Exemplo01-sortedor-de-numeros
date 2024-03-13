//camelCase - Sorteador de Números
// Analizando o código HTML vamos emplementar o JS para realizar as funcionalidades descritas

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);         //Buscando o valor do input no HTML
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let diferenca = (ate - de + 1);

    if (de >= ate){                                                                 //Limitando números imprórios
        alert('O campo "Do número" deve conter um valor menor que o valor do campo "Até o número"!');
        alert('Verifique as informações e tente novamente');
        return;
    }

    if(quantidade > diferenca){                                                     //Limitando dominio impróprio
        alert(`A quantidade de números sorteados deve ser ${diferenca} ou menor neste caso`);
        alert('Verifique as informações e tente novamente');
        return;
    }

    let sorteados = [];
    let numero;
    
    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);
        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }
    
    let resultado = document.getElementById('resultado');                       //Apresentando os numeros sorteados
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`

    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max){                                        //Sorteando nº aleatorio entre 2 valores
    return Math.floor(Math.random() * (max - min + 1)) + min;                       
}

function alterarStatusBotao(){                                                  //Habilitando o status do Botao
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){                                                           // Limpando as informações
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}