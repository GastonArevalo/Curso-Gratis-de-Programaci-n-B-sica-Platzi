var vp = document.getElementById("villaplatzi"); //importar canvas
var papel = vp.getContext("2d");    //inportar contexto canvas en 2d
var cantidadv = aleatorio(0,10); //generar un numero aleatorio para la cantidad de animal
var cantidadc = aleatorio(0,10); //generar un numero aleatorio para la cantidad de animal
var cantidadp = aleatorio(0,10); //generar un numero aleatorio para la cantidad de animal
//crear objeto para el fondo
var fondo = {
    url: "archivos/tile.png",
    cargaOK: false
};
//crear objetos para los animales
var vaca = {
    url:"archivos/vaca.png",
    cargaOK: false
};
var cerdo = {
    url:"archivos/cerdo.png",
    cargaOK: false
};
var pollo = {
    url:"archivos/pollo.png",
    cargaOK: false
};
//carga de imagen para el objeto fondo
fondo.imagen = new Image(); //se utiliza la funcion Image() para agregar la imagen dentro del objeto
fondo.imagen.src = fondo.url; //se establece la direccion donde se encuentra la imagen
fondo.imagen.addEventListener("load", cargarFondo); //listener para verificar cuando se haya cargado la imagen

//se aplica lo mismo

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

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
function cargarCerdos()
{
    cerdo.cargaOK = true;
    dibujar();
}
function cargarPollos()
{
    pollo.cargaOK = true;
    dibujar();
}
function dibujar()
{
    if(fondo.cargaOK){
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK){
        console.log(cantidadv + " vacas");
        for(var v=0; v<cantidadv; v++){
            var x = aleatorio(0, 6);
            var y = aleatorio(0, 6);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(vaca.imagen, x, y);
            }
            }
    if(cerdo.cargaOK){
        console.log(cantidadc + " cerdos");
        for(var v=0; v<cantidadc; v++){
            var x = aleatorio(0, 6);
            var y = aleatorio(0, 6);
            var x = x * 50;
            var y = y * 50;
            papel.drawImage(cerdo.imagen, x, y);
            }
        }
    if(pollo.cargaOK){
        console.log(cantidadp + "pollos");
        for(var v=0; v<cantidadp; v++){
            var x = aleatorio(0, 6);
            var y = aleatorio(0, 6);
            var x = x * 10;
            var y = y * 10;
            papel.drawImage(pollo.imagen, x, y);
            }                
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
