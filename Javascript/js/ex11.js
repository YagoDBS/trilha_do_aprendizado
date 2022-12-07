var n,cont,tabuada
n=parseInt(prompt("Digite a tabuada desejada"))
for(cont=0;cont<11;cont++){
    tabuada=n*cont
    document.write(n+" x "+cont+" = "+tabuada+"<br>")
}
