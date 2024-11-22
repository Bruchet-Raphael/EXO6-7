var maVarible = parseInt(prompt("Donner un nombre"));
var resultat = 0;
resultat+=maVarible;

for(var i=1;i<maVarible;i++)
{
    resultat+=i;
}

if(resultat <= 0){
    alert(0);
}else{
    alert("le calcule fait : "+resultat);
}