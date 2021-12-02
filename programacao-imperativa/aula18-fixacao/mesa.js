/*1 - Loop de Pares
Você deve criar uma função chamada loopDePares que receba um número como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
Caso o número da iteração somado com o número passado pelo parâmetro seja par, aparecerá no console: "O número x é par"
 */

function loopPares(numero){
    let soma;
    for(i=1;i<=100;i++){
        soma = i+numero;
        if(soma%2 === 0){
            console.log(soma+" é par");
        }else{
            console.log(soma+" é impar");
        }
    }
}

//loopPares(1);

/*2) - Loop ímpares com palavra
Você deve criar uma função chamada loopDeImpares que receba um número e uma palavra como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
Agora, modifique o código para que, caso esse número somado com o número passado por parâmetro seja ímpar, mostre a palavra passada por parâmetro no console.
*/

function loopDeImpares(numero,palavra){
    let soma;
    for(i=1;i<=100;i++){
        soma = i+numero;
        if(soma%2 === 0){
            console.log(soma+" é par");
        }else{
            console.log(soma+" "+palavra);
        }
    }
}

//loopDeImpares(1,'teste')

/*3) - Soma
	Você deve criar uma função chamada soma que receba um número como parâmetro e retorne a soma de todos os seus números anteriores, incluindo o número recebido por parâmetro.
Exemplo: 
soma(3) deve retornar 6 pois faz (1 +2 +3)
soma(8) deve retornar 36
*/

function soma(numero){
    soma = 0;
    for(i=1;i<=numero;i++){
        soma = soma+i;
    }
    console.log(soma);
}
// soma(6); 
//retorna 21

/*4) - Novo Array
Você deve criar uma função chamada newArray que receba um número como parâmetro e retorne um novo array com a quantidade de elementos equivalente ao valor do número que você passou por parâmetro.
Exemplo: 
newArray(5) deve retornar [1,2,3,4,5]
newArray(10) deve retornar [1,2,3,4,5,6,7,8,9,10]
*/

function newArray(numero){
    newArray = [];
    for(i=1;i<=numero;i++){
        newArray.push(i);
    }
    return newArray;
}

//console.log(newArray(5));

/*5) - String.split()
Você deve criar uma função chamada split que receba uma string e simule o comportamento da função split original. Se você não sabe como funciona, o Google pode ajudá-lo.
Importante: Você não pode usar o String.split()
Exemplo: 
split(“olá”) deve retornar [”o”,”l”,”á”]
split(“tchau”) deve retornar [“t”,“c”,”h”,”a”,”u”]
*/

function split(palavra){
    tam_palavra = palavra.length;
    array_split = [];
    for(i=0;i<tam_palavra;i++){
       array_split.push(palavra[i])
    }
    return array_split;
}

//console.log(split("teste"));

/*6) - Mover os zeros para o final
Você deve criar uma função chamada moverZeros que receba um array como parâmetro e retorne outro com os números 0 ordenados ao final.

Exemplo: 
moverZeros([false,1,0,1,2,0,1,3,"a"]) deve retornar [false,1,1,2,1,3,"a",0,0]
moverZeros([1,2,0,1,0,1,0,3,0,1]) deve retornar [1,2,1,1,3,1,0,0,0,0]

*/

array = [1,5,3,0,5,8,0,2,4]
function moverZeros(array){
    tam_array=array.length;
    array_zero = [];
    novo_array = [];
    for(i=0;i<tam_array;i++){
        if(array[i] == 0){
            array_zero.push(array[i]);
        }else{
            novo_array.push(array[i]);
        }
    }

    array_final = novo_array.concat(array_zero);
    return array_final;
}

console.log(moverZeros(array));
