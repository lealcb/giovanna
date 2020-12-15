let sys = {
     LoginsPermitidos: [{
        user:"Leal" , 
        password: "Zelda123"},{
        user:"Giovanna", 
        password: "140519",
        }],
    adicionarUser: function() {
        LoginAcesso = document.getElementById('textUserlogin').value
        SenhaAcesso = document.getElementById('textUserpass').value

        let checar = this.LoginsPermitidos.some(function(e){
            return e.user == LoginAcesso && e.password == SenhaAcesso
        })
        if(checar == true){
            location.href = "./transactions.html"
        }
        else
        {
            alert("Login e senha invalidos")
        }
    }
};

document.getElementById("primeiroBotao").addEventListener("click", sys.adicionarUser.bind(sys));

