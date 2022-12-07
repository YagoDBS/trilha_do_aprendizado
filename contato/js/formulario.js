function Enviar(){
    var nome=document.getElementById("nome")
    var emali=document.getElementById("email")
    var ok
    if(nome.value!="" && nome.value.indexOf(" ")!=-1){
        if(emali.value.indexOf("@")!=-1){
            alert(nome.value+" agrecemos o seu contato")
            ok=true
        }else{
            alert("Digite um email valido")
            ok=false
        }
        
    }else{
        alert("Preencha o seu nome completo")
        ok=false
    }
    return ok
}