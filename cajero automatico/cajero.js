 //creacion de clase para los billetes con su valor y cantidad
 class Billete
 {
     constructor(v, c)
     {
        this.valor = v;
        this.cantidad = c;
     }
 }
 function entregarDinero()
 {
     var t = document.getElementById("dinero");//obtiene el valor de textbox
     dinero = parseInt(t.value);//asigna el valor a una variable
     for(var bi of caja) //recorrer array caja
     {

        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor); //realiza la division

            if(div > bi.cantidad)
            {
                papeles = bi.cantidad; //si el resultado de la division es mayor que la de los billetes lo setea a papeles
            }
            else
            {
                papeles = div;
            }
            entregado.push ( new Billete(bi.valor, papeles)); //carga en entregado los billetes
            dinero = dinero - (bi.valor * papeles); //resta el valor de los billetes entregados
        }
     }
     if(dinero > 0)
     {
         document.write("soy un cajero pobre y no tengo dinero");
     }
     else
     {
        for(var e of entregado)
        {
          document.write(e.cantidad + " billetes de $" + e.valor + "</br>");
        }
     }
     
 }
//creacion de la variable caja la cual va a contener los datos de los billetes
 var caja = [];
 var entregado = []; //coleccion de billetes que entrego al usuario
 caja.push(new Billete(50, 10) );
 caja.push(new Billete(20, 10) );
 caja.push(new Billete(10, 10) );
 var dinero = 0;
 var div = 0; //resultado de la division
 var papeles = 0; //cantidad de papeles

 var b = document.getElementById("extraer"); //boton en extraer
 b.addEventListener("click", entregarDinero);//a la espera del click para ejecutar la funcion