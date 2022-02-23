
function iniciaJogo(){
    alert("Jogo Jokpenpo será iniciado");
    let opcaoUsuario;
    opcaoUsuario = parseInt(prompt("Entre com uma opção: 1 - Pedra 2 - Papel 3 Tesoura"));
    return opcaoUsuario;
}
function getRandomArbitrary() {
    return parseInt(Math.random() * (3 - 1) + 1);
}

function verificarTipo(numero){
    switch (numero){
        case 1:
            numero = "Pedra";
            break;
        case 2:
            numero = "Papel";
            break;
        case 3:
            numero = "Tesoura";
            break;
    }
    return numero;
}
function verificaGanhador(opcaoUsuario, opcaoMaquina){
    if(){

    }else if(){

    }else{

    }
}
opcaoUsuario = iniciaJogo();
switch (opcaoUsuario) {
    case 1:
        opcaoMaquina = getRandomArbitrary();
        opcaoMaquinaNome = verificarTipo(opcaoMaquina);
        alert("Voçe escolheu = Pedra, a máquina = " + opcaoMaquinaNome);
        verificaGanhador(opcaoUsuario,opcaoMaquina);
        break;
    case 2:
        alert(opcaoUsuario);
        break;
    case 3:
     alert(opcaoUsuario)
      break;
    default:
      alert(`Desculpe voçe deve escolher um numero entre as opçãoes informadas`);
      iniciaJogo();
  }
