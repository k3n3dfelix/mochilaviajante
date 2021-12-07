let json_pessoas = [
    {
      altura: 1.92,
      sexo: "M",
      
     },
     {
        altura: 11.56,
        sexo: "F",
        
       },
       {
        altura: 1.56,
        sexo: "M",
        
       },
       {
        altura: 1.90,
        sexo: "M",
        
       },
       {
        altura: 1.78,
        sexo: "M",
        
       },
       {
        altura: 1.76,
        sexo: "F",
        
       },
       {
        altura: 1.67,
        sexo: "M",
        
       },
       {
        altura: 1.85,
        sexo: "M",
        
       },
       {
        altura: 1.77,
        sexo: "F",
        
       },
       {
        altura: 1.78,
        sexo: "F",
        
       },
       {
        altura: 1.67,
        sexo: "M",
        
       },
       {
        altura: 1.38,
        sexo: "M",
        
       },
       {
        altura: 1.91,
        sexo: "M",
        
       },
       {
        altura: 1.89,
        sexo: "F",
        
       },
       {
        altura: 1.84,
        sexo: "M",
        
       },
       {
        altura: 1.98,
        sexo: "M",
        
       }
     
    
 ] ;

 let Pessoas = [
    {
        "sexo": "F",
        "nome": "Abigael Natte",
        "altura": "1.61"
    },
    {
        
        "sexo": "M",
        "nome": "Ramon Connell",
        "altura": "1.75"
    },
    {
        
        "sexo": "M",
        "nome": "Jarret Lafuente",
        "altura": "1.55"
    },
    {
        
        "sexo": "F",
        "nome": "Ansel Ardley",
        "altura": "1.67"
    },
    {
        
        "sexo": "F",
        "nome": "Jacki Shurmer",
        "altura": "1.75"
    },
    {
        
        "sexo": "M",
        "nome": "Jobi Mawtus",
        "altura": "1.88"
    },
    {
        
        "sexo": "M",
        "nome": "Thomasin Latour",
        "altura": "1.67"
    },
    {
        
        "sexo": "F",
        "nome": "Lonnie Verheijden",
        "altura": "1.63"
    },
    {
        
        "sexo": "M",
        "nome": "Alonso Wannan",
        "altura": "1.92"
    },
    {
        
        "sexo": "F",
        "nome": "Bendite Huggett",
        "altura": "1.80"
    }
  ]
;


//console.log(alturaMaior[0].altura);
//console.log(alturaMaior[indexFinal].altura);





// let pessoa = {
//     pessoas: Pessoas,
//     consultarCliente: function(titular){
        
//         //cliente = "Cliente Não Encontrado";
//         menor = 0;
//         Object.keys(this.pessoas).forEach((key) => {
//             //console.log (this.clientes[key].titular +" == " + titular);
//             if((this.pessoas[key].altura) > menor){
//                menor = this.clientes[key].altura;  
//             }else{
//                 menor = this.pessoas[key++].altura
//             }
//            //console.log(key); //column01...
//             //console.log(this.pessoas[key].altura); //Coluna 01...
//         });

//         console.log(menor)
        
//     }
// }

// console.log(pessoa.consultarCliente("1"));

function maiorAltura(){
    let maior =0;
    Pessoas.forEach((pessoa) => {
        if (pessoa.altura > maior) maior = Number(pessoa.altura);
      });
      return maior;
}



function menorAltura(){
    let menor = 0;
    Pessoas.forEach((pessoa) => {
        if (menor == 0) menor = Number(pessoa.altura);
        if (pessoa.altura < menor) menor = Number(pessoa.altura);
      });
      return menor;
}

console.log(maiorAltura());
console.log(menorAltura());




// a média de altura das mulheres;

// let total = Pessoas.reduce(function(acumulador,item){
//     console.log(acumulador,item)
//     return acumulador+item;
// });






