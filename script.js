 /* COMIENZA EL CODIGO */

       /*TITULO*/

       alert(" !! BIENVENIDO  AL HOTEL CANINO  DE !! MIS PATITAS !! ");

       /*CONDICIONAL*/

       let CantPerros = " CUANTOS PERROS DESEA HOSPEDAR \n1 PERROS \n2 PERROS  \n3 O MAS PERROS  \n4 SALIR"
       let  CP=   prompt(CantPerros) 
       let CantDias = prompt("INGRESE LA DURACION DE LA ESTADIA EN DIAS")
      
       
       let precio1D= 2000
       let contador = 0
       let precioEstadia = precio1D * CantDias * CP

       if ( CP == 1 ) {
        alert("EL PRECIO DE SU ESTADIA SERIA DE :" + " $ " +  precioEstadia);
      }
      else if (  CP == 2 ) {
         alert("EL PRECIO DE SU ESTADIA SERIA DE :" + " $ " + (precioEstadia)*0.90);
     }
     else if (  CP == 3 ) {
        alert("EL PRECIO DE SU ESTADIA SERIA DE  :" + " $ " +  (precioEstadia)*0.80);
     }

     else if (  CP == 4 ) {
      alert("GRACIAS POR SU VISITA");
   }
    
        else {
            alert("GRACIAS POR SU VISITA");
        }
       
do { 
    contador++
    alert("USTED ESTA COTIZANDO ESTADIA PARA  :" + "  " + CP + "  " + "PERROS DURANTE" + " " +  CantDias + "  " + "DIAS")
   } while (contador < 1);

/*CONDICIONAL*/



/* FUNCION*/
let mes= prompt("SELECCIONE EL MES DE SU ESTADIA \n1 DICIEMBRE \n2 ENERO  \n3 FEBRERO  \n4 SALIR")

function calcularPrecioP(mes, precioEstadia) {
    var precioFinal = precioEstadia;
    
    switch(mes) {
      case "1":
        precioFinal = precioEstadia * 1;
        break;
      case "2":
        precioFinal = precioEstadia * 0.75;
            break;
      case "3":
        precioFinal = precioEstadia * 0.70;
        break;
      // Continuar con los otros meses
      default:
        precioFinal = precioEstadia;
    }
    
    return precioFinal;
  }

  var precioFinal = calcularPrecioP(mes ,precioEstadia);
  console.log(precioFinal);
  alert("EL PRECIO FINAL DE SU ESTADIA ES :" + " $  " + precioFinal);

  /*FUNCION*/
 
 /* DO WHILE*/
let nombreUsuarioBD = "ALEJANDRO"
let nombreUsuarioIngresado = ""
let contador1 = 0
do {
  nombreUsuarioIngresado = prompt("INICIE SESION PARA CONFIRMAR SU RESERVA")
  contador++
} while (contador < 3 && nombreUsuarioBD != nombreUsuarioIngresado)

if (nombreUsuarioBD == nombreUsuarioIngresado && contador <= 3) {
  alert("BIENVENIDO " + nombreUsuarioBD + " TU RESERVA SE HIZO CON EXITO")
} else {
  alert("INTENTE MAS TARDE")
}

/* DO WHILE*/


