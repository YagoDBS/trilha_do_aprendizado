/*Fazer um programa que exiba se um valor é maior que outro*/

var n1, n2

n1=parseInt(prompt("Entre com o valor: "))
n2=parseInt(prompt("Entre com o valor: "))

if(n1<n2){
    alert(n1+" é menor que "+n2);
}else if(n1>n2){
    alert(n1+" é maior que "+n2);
}else{
    alert(n1+" é igual a "+n2);
}