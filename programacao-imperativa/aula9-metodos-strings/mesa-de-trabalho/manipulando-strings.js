/*
Arrays e Coleções
Vamos fortalecer nosso conhecimento sobre arrays explorando diferentes ações. Veremos se eles se comportam como esperamos ou se ocorrem resultados inesperados.
Em primeiro lugar, vamos praticar as ações mais comuns e necessárias:

*/
//Acessar elementos específicos de um array.
let array = ["cachorro","gato","lebre","onca"];
console.log("Imprimindo o array completo: "+ array);
console.log("Imprimindo a posição 0 do array: "+array[0]);

//Modificar cada um dos elementos de um array e imprimi-los no console.
array[0] = "gato";
array[1] = "escorpiao";
array[2] = "cobra";
array[3] = "macaco";

console.log("Imprimindo o array completo alterado: "+ array);

//Adicionar elementos a um array.
array.push("minhoca");
console.log("Imprimindo o array com um item adicionado: "+ array);

//Extrair elementos de um array.
let elimina = array.pop()
console.log("O elemento eliminado foi: "+ elimina);
console.log("Imprimindo o array com um item eliminado: "+ array);

//Comparar elementos de um array com os elementos de outro.
let array2 = ['coelho','urso','gato'];
if(array[0] == array2[1]){
    console.log("Os dados das posições dos arrays são iguais: "+"array[0] = "+array[0]+ " array2[2] = "+ array2[2])
}else{
    console.log("Os dados das posições do arrays não são iguais")
}



//Testes de Analise de resultados
let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])



let str = "una string qualquer";
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])

