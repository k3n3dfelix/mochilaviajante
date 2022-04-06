onload = () => {
    let tokenJwt = window.localStorage.getItem('jwt');
    console.log(tokenJwt);
    if(tokenJwt) {
        location.href = "tarefas.html";
    }else{
        console.log(tokenJwt);
    }
   
}