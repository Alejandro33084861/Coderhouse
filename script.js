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
        precioFinal = precioEstadia * 0.90;
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
  alert(nombreUsuarioBD + " TU RESERVA FUE EXITOSA!! MIRA NUESTRO PETSHOP")
} else {
  alert("INTENTE MAS TARDE")
}
/* DO WHILE*/


/*FUNCION CONSTRUCTORA */
let products = [
  {
    idCat: 1,
    id: 1,
    nombre: "PELOTA",
    categoria: "JUGUETES",
    precio: 800,
    stock: 3
  },
  {
    idCat: 1,
    id: 2,
    nombre: "PELUCHE",
    categoria: "JUGUETES",
    precio: 800,
    stock: 3
  },
  {
    idCat: 1,
    id: 3,
    nombre: "HUESOS DE GOMA",
    categoria: "JUGUETES",
    precio: 1000,
    stock: 5
  },
  {
    idCat: 2,
    id: 4,
    nombre: "SOGA",
    categoria: "ACCESORIOS",
    precio: 1000,
    stock: 5
  },
  {
    idCat: 2,
    id: 5,
    nombre: "COLLARES",
    categoria: "ACCESORIOS",
    precio: 1000,
    stock: 1
  },
  {
    idCat: 2,
    id: 6,
    nombre: "CORREAS",
    categoria: "ACCESORIOS",
    precio: 1000,
    stock: 8
  },
  {
    idCat: 3,
    id: 7,
    nombre: "REMERAS",
    categoria: "ROPA",
    precio: 1500,
    stock: 2
  },
  {
    idCat: 3,
    id: 8,
    nombre: "PRETALES",
    categoria: "ROPA",
    precio: 1500,
    stock: 2
  },
  ]

let productos = products.map(product => {
  return new Producto(product.idCat, product.id, product.nombre, product.categoria, product.precio, product.stock)
})


let categoria = prompt("ESCRIBA UNA DE LAS CATEGOTRIA PARA FILTRAR \n1 JUGUETES \n2 ACCESORIOS  \n3 ROPA")
console.log(productos.filter(producto => producto.categoria.includes(categoria))) 

const CatSeleccionada = productos.filter(producto => producto.categoria.includes(categoria))

let listaseleccionada = " SELECCIONE ALGUN PRODUCTO DE LA TIENDA  \n" + CatSeleccionada.map(producto => producto.id + " " + producto.nombre).join('\n') + "\n0 PARA SALIR"
console.log(listaseleccionada)

  let carrito = []
  
  let opcion
  
  do {
    opcion = Number(prompt(listaseleccionada))
    let productoBuscado = productos.find(producto => producto.id === opcion)
    
    if (productoBuscado) {
      let posicionProductoBuscado = carrito.findIndex(producto => producto.id === productoBuscado.id)
      if (posicionProductoBuscado != -1) {
        carrito[posicionProductoBuscado].cantidadUnidades++
        carrito[posicionProductoBuscado].subtotal = carrito[posicionProductoBuscado].precioUnidad * carrito[posicionProductoBuscado].cantidadUnidades
      } else {
        carrito.push({
          id: productoBuscado.id,
          nombre: productoBuscado.nombre,
          cantidadUnidades: 1,
          precioUnidad: productoBuscado.precio,
          subtotal: productoBuscado.precio
        })
      }
    }
    console.log(carrito)
   
  } while (opcion != 0)
  

  const precioTotal = carrito.reduce((acumulado, actual) => {
    return acumulado + actual.subtotal;
  }, 0);
  console.log(precioTotal)
  
 
  alert("MUCHAS GRACIAS SU ESTADIA SALDRA :" + " $  " + precioFinal + "\n" + "\n" + "ADEMAS SELECCIONO DEL PETSHOP" + "\n" + "\n" + carrito.map(producto => producto.cantidadUnidades + "  " + producto.nombre + "  " + " $  " + producto.subtotal).join('\n') + "\n" + "\n" + "SU TOTAL A ABONAR ES" + " $ " + (precioFinal+precioTotal) );
  
