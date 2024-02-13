var i;
var res;

document.write("Tabla de multiplicar del 7: <br>");
for(i=1; i<=9; i++){
    res=i*7;
    document.write("7" +"*"+ i+"="+ res+ "<br>");
}

i=1;
document.write("<p>Tabla de sumar del 8: <br>");
while(i<=9){
    res= i + 8;
    document.write("8" +"+"+ i +"="+ res+ "<br>");
    i++;
}

i=1;
document.write("<p>Tabla de dividir del 9: <br>");
do{
    res=9/i;
    document.write("9" +"/"+ i +"="+ res+ "<br>");
    i++;
}while(i<=9);

document.write("<p>Otras operaciones: <br>");

res= 125 >>3;
document.write("125" +"/"+ "8" +"="+ res+ "<br>");

res=40 <<2;
document.write("40" +"*"+ "4" +"="+ res+ "<br>");

res=25 >>1;
document.write("25" +"/"+ "2" +"="+ res+ "<br>");

res=10<<4;
document.write("10" +"*"+ "16" +"="+ res+ "<br>");

