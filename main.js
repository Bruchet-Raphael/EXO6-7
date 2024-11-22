function addition(param1,param2){
    return param1 + param2;
}


var maVarible = parseInt(prompt("Donner un nombre"));
var resultat = 0;
resultat+=maVarible;

for(var i=1;i<maVarible;i++)
{
    resultat=addition(resultat,i);
}

if(resultat <= 0){
    alert(0);
}else{
    alert("le calcule fait : "+resultat);
}