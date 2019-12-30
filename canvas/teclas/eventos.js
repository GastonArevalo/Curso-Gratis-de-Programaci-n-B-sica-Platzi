document.addEventListener("keyup", dibujarTeclado);// detectando interrupcion por subida
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);
//funcion para dibujar con el teclado
function dibujarTeclado(evento)
{
    var colorcito = "brown";
    var movimiento = 10;
    if(evento.keyCode == teclas.UP){
        dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
    }
    if(evento.keyCode == teclas.DOWN){
        dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
    }
    if(evento.keyCode == teclas.LEFT){
    //     dibujarLinea(colorcito, x, y, x - movimiento, papel);
    //    x = x - movimiento;
        dibujarLinea(colorcito, x, y, x - movimiento, y , papel);
        x = x - movimiento;
    }
    if(evento.keyCode == teclas.RIGHT){
    //     dibujarLinea(colorcito, x, y, x + movimiento, papel);
    //    x = x + movimiento;
        dibujarLinea(colorcito, x, y, x + movimiento, y , papel);
        x = x + movimiento;
    }
}
//declara array para los valores de las teclas
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();         //inicializacion del trazo
    lienzo.strokeStyle = color; //establece el color del dibujo
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial); //inicializa la ubicacion dentro del canvas donde va a comenzar el trazo
    lienzo.lineTo(xfinal, yfinal); //ubicacion donde termina el trazo
    lienzo.stroke();     //finaliza el trazo       
    lienzo.closePath();     //finalizacion del dibujo
}