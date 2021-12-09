function alunos(){

    // let alunos_escola = Alunos();


    function Aluno(nome,qtd_faltas,notas){
    this.nome = nome
    this.qtd_faltas = qtd_faltas
    this.notas = notas
    }

    // let aluno1 = new Aluno("ggTestedfdf",2, [1,2,3,4]);

    // for(i=0;i<alunos_escola.length;i++){
    // //console.log(clientes_banco[i].numero,clientes_banco[i].tipo);
    // 'let aluno'+[i]+ '= new Aluno('+alunos_escola[i].nome,alunos_escola[i].qtd_faltas, alunos_escola[i].notas+")";
    // }

    //console.log(aluno2);

    let alunos = [
        {
            "nome":"João cleiton",
            "qtd_faltas": 2,
            "notas": [10,8,6,7]
        },
        {
            "nome": "Jose da silva",
            "qtd_faltas": "",
            "notas": [10,8,6,7]
        },
        {
            "nome": "Maria Jose",
            "qtd_faltas": 5,
            "notas": [10,8,6,7]
        },
        {
            "nome": "Fernando Marinho",
            "qtd_faltas": 3,
            "notas": [10,8,6,7]
        },
        {
            "nome": "F",
            "qtd_faltas": 10,
            "notas": [10,8,6,7]
        },
        {
            "nome": "F",
            "qtd_faltas": 7,
            "notas": [10,8,6,7]
        },
        {
            "nome": "F",
            "qtd_faltas": 8,
            "notas": [10,8,6,7]
        },
        {
            "nome": "F",
            "qtd_faltas": 2,
            "notas": [10,8,6,7]
        },
        {
            "nome": "F",
            "qtd_faltas": 4,
            "notas": [10,8,6,7]
        },
        {
            "nome": "F",
            "qtd_faltas": 6,
            "notas": [10,8,6,7]
        }
      ]
    ;
    return alunos
}

module.exports = alunos;