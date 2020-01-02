var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
    url: "archivos/tile.png",
    cargaOK: false
};

var vaca = {
    url:"archivos/vaca.png",
    cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

// var cerdo = new Image();
// cerdo.src = "archivos/cerdo.png";
// cerdo.addEventListener("load", cargarCerdos);

// var pollo = new Image();
// pollo.src = "archivos/pollo.png";
// pollo.addEventListener("load", cargarPollos);

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


function dibujar()
{
    if(fondo.cargaOK){
    papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK){
    papel.drawImage(vaca.imagen, 100, 100);
    }
}
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