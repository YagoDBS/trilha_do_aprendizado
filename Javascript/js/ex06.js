var num, r
num=parseInt(prompt("Mostre os numéricos"))
r=num%21==0 ? "O número é divisível por 7 e por 3" : num%7==0 ? "O número é divisível por 7" : num%3==0 ? "O número é divisível por 3" : "O número não é divisível por 3 nem por 7"
alert(r)