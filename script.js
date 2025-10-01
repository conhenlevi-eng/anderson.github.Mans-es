function cadastrar(){
    var usuario = document.getElementById("novoUsuario").value
    var senha = document.getElementById("novoSenha").value

    if(usuario == "" || senha == ""){
        alert("Preencha todos os campos!")
        return;
    }
    //LocalStorage.setItem("chave",valor)
    localStorage.setItem("emailCadastrado", usuario)
    localStorage.setItem("senhaCadastrado",senha)
    alert("Usuario cadastrado com sucesso")
}

function logar(){
 var usuario =  document.getElementById("loginUsuario").value
 var senha = document.getElementById("loginSenha").value 
 
 
 var usuarioSalvo = localStorage.getItem("emailCadastrado")
 var senhaSalvo = localStorage.getItem("senhaCadastrado")
 if(usuario == usuarioSalvo && senha == senhaSalvo){
    alert("Login efetuado com sucesso!")
    location.href="index.html"
 }
 else{
    alert("Login ou senha inválidos")
 }
}