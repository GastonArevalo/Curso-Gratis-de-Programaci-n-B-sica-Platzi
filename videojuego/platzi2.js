var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var cantidad = aleatorio(0,10);
var xc = 150;
var yc = 150;
var x = 5;
var y = 5;


var fondo = {
    url: "archivos/tile.png",
    cargaOK: false
};

var vaca = {
    url:"archivos/vaca.png",
    cargaOK: false
};

var cerdo = {
    url:"archivos/cerdo.png",
    cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

document.addEventListener("keyup", moverCerdito);

// var cerdo = new Image();
// cerdo.src = "archivos/cerdo.png";
// cerdo.addEventListener("load", cargarCerdos);

// var pollo = new Image();
// pollo.src = "archivos/pollo.png";
// pollo.addEventListener("load", cargarPollos);
var x = aleatorio(0, 6);
var y = aleatorio(0, 6);
function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}
function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}
function cargarCerdos()
{
    cerdo.cargaOK = true;
    dibujar();
}
function moverCerdito(evento){
    var movimiento = 10;
    if(evento.keyCode == teclas.UP){
        //dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
        yc = yc - movimiento;
    }
    if(evento.keyCode == teclas.DOWN){
        //dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
        yc = yc + movimiento;
    }
    if(evento.keyCode == teclas.LEFT){
    //     dibujarLinea(colorcito, x, y, x - movimiento, papel);
    //    x = x - movimiento;
      //  dibujarLinea(colorcito, x, y, x - movimiento, y , papel);
        xc = xc - movimiento;
    }
    if(evento.keyCode == teclas.RIGHT){
    //     dibujarLinea(colorcito, x, y, x + movimiento, papel);
    //    x = x + movimiento;
       // dibujarLinea(colorcito, x, y, x + movimiento, y , papel);
        xc = xc + movimiento;
    }
    var x = aleatorio(0, 6);
    var y = aleatorio(0, 6);
    dibujar();
}

function dibujar()
{
  
    //dibuja
    if(fondo.cargaOK){
        papel.drawImage(fondo.imagen, 0, 0);
        console.log(x);
    }
    if(vaca.cargaOK){
        console.log(cantidad);
        for(var v=0; v<cantidad; v++){
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(vaca.imagen, x, y);
            }
    }
    if(cerdo.cargaOK){
        // var xc = 150
        // var yc = 150
        // var xc = xc * 50;
        // var yc = yc * 50;
        papel.drawImage(cerdo.imagen, xc, yc);
    }

        
}
//declara array para los valores de las teclas
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
// function dibujarVacas()
// {
//     papel.drawImage(vaca, 10, 10);
// }
// function dibujarCerdos()
// {
//     papel.drawImage(cerdo, 10, 300);
// }
// function dibujarPollos()
// {
//     papel.drawImage(pollo, 300, 150);
// }
function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}