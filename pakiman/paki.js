var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

class Pakiman
{
    //funciones, las toma automaticamente
    constructor(n, v, a)
    {
       this.imagen = new Image();
       this.nombre = n; //establecer los valores a los objetos dentro de la clase
       this.vida = v;
       this.ataque = a;

       this.imagen.src = imagenes[this.nombre];
    }
     //funciones, las toma automaticamente
    hablar()
    {
        alert(this.nombre);
    }
    mostrar()
    {
        document.body.appendChild(this.imagen);
        document.write("<br /><strong>" + this.nombre + "</strong><br />");
        document.write("Vida: " + this.vida + "<br />");
        document.write("Ataque: " + this.ataque);
        
    }
}
//creacion de objetos

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));
//recorrer array
for (var pakin of coleccion)
{
 pakin.mostrar();
}

