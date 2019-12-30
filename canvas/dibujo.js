var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick); //detecta evento por click
//configuracion del dibujo curva de canvas
var d = document.getElementById("dibujito"); //se importa el tamanño del canvas
var lienzo = d.getContext("2d"); //se establece que el lienzo va a ser en 2 dimensiones
var lineas = 0; // cantidad de lineas que va a conformar el dibujo de la curva
var l = 0;  //inicializa la variable previo al bucle
var yi, xf;
var colorcito = "#FAA"; //establece el valor de un color para el contorno del canvas


dibujarLinea(colorcito, 1, 1, 1, 300);   //contorno lateral
dibujarLinea(colorcito, 1, 299, 299, 299); //contorno inferior

//funcion para dibujar linea
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();         //inicializacion del trazo
    lienzo.strokeStyle = color; //establece el color del dibujo
    lienzo.moveTo(xinicial, yinicial); //inicializa la ubicacion dentro del canvas donde va a comenzar el trazo
    lienzo.lineTo(xfinal, yfinal); //ubicacion donde termina el trazo
    lienzo.stroke();     //finaliza el trazo       
    lienzo.closePath();     //finalizacion del dibujo
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    console.log(texto.value);
    while (l<lineas){
        yi = 10 * l;
        xf = 10 * (l +1);
        dibujarLinea("#AAF", 0, yi, xf, 300);
        console.log("Linea " + l);
        l++;
    }
}
