function Login(event) {
    event.preventDefault();
    var usuario = document.getElementById('typeEmail').value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementById('typePassword').value;
    senha = senha.toLowerCase();
  
    if (usuario == "teste@teste" && senha == "teste") {      
      window.location = "home.html";         
    } else if( usuario == "" || senha == ""){
      alert("Preencha todos os campos!");
    } else {
        alert("Usuário ou senha inválidos!");
    }
  }