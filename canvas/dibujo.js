var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

/*lienzo.beginPath();
lienzo.strokeStyle = "blue";
lienzo.moveTo(100, 100);
lienzo.lineTo(200, 200);
//x
lienzo.moveTo(100, 200);
lienzo.lineTo(200,100);
//recta vertical
lienzo.moveTo(150,100);
lienzo.lineTo(150,200);
//recta horizontal
lienzo.moveTo(200,150);
lienzo.lineTo(100,150);
//linea superior
lienzo.moveTo(100,100);
lienzo.lineTo(200,100);
//linea inferior
lienzo.moveTo(200,200);
lienzo.lineTo(100,200);
//linea lado izquierdo
lienzo.moveTo(100,100);
lienzo.lineTo(100,200);
//linea lado derecho
lienzo.moveTo(200,200);
lienzo.lineTo(200,100);
lienzo.stroke();
lienzo.closePath();*/
dibujarLinea("pink", 10, 300, 220, 10);
dibujarLinea("yellow", 300, 10, 10, 220);
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}