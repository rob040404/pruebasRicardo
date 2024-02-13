var numero;
numero= window.prompt("Introduce un número de 1 al 10");
//document.write("Has elegido el " + numero+ " y es de tipo "+ typeof numero);
numero=parseInt(numero);
//document.write("<br> Ahora es de tipo "+ typeof numero);

if(numero<=1 || numero>=10){
    alert("Tiene que ser un número entre 1 y 10");
    
}else{
    if(numero==2 || numero==4 || numero==8){
        var desplazamiento;
        switch(numero){
            case 2: desplazamiento=1;
            break;
            case 4: desplazamiento=2;
            break;
            default: desplazamiento=3; //Podríamos poner case 8 porque es la única opción que queda
        }

        var i;
        var res;
        document.write("<br>Tabla de multiplicar de "+ numero);

        for(i=1; i<=10; i++){
            res= i << desplazamiento;
            document.write("<br>"+ numero + "*" + i + "="+ res);

        }
    }else if(numero==3 || numero==6 || numero==9){              //Poner else if porque sino hace también la de else en caso de 2, 4, 8 (del anteriro if)
        var i=1;
        var res;
        document.write("<br>Tabla de sumar de "+ numero);
        while(i<=10){
            res=numero + i;
            document.write("<br>"+ numero + "+" + i + "="+ res);
            i++;
        }
    }else{
        var i=1;
        var res;
        document.write("<br>Tabla de dividir de "+ numero);
        do{
            res= numero / i;
            document.write("<br>"+ numero + "/" + i + "="+ res);
            i++;
        }while(i<=10);

    }
}
