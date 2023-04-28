// REGISTRO DE USUARIO Y LOGIN (USO DE LOCAL STORAGE Y JSON)
let usuarioBD = "Alejandro"
let contraseniaBD = "Alejandro1987"

let login = document.getElementById("login")
let pantallaCompra = document.getElementById("pantallaCompra")

let usuario = document.getElementById("usuario")
let contrasenia = document.getElementById("contrasenia")
let registrarse = document.getElementById("registrarse")

registrarse.addEventListener("click", () => {
  console.log(usuario.value)
  console.log(contrasenia.value)
  let infoUsuario = { usuario: usuario.value, contrasenia: contrasenia.value}
  localStorage.setItem("infoUsuario", JSON.stringify(infoUsuario))
})

let usuarioIS = document.getElementById("usuarioIS")
let contraseniaIS = document.getElementById("contraseniaIS")
let iniciarSesion = document.getElementById("iniciarSesion")

iniciarSesion.addEventListener("click", () => {
  let infoUsuario = JSON.parse(localStorage.getItem("infoUsuario"))
  if (infoUsuario.usuario == usuarioIS.value && infoUsuario.contrasenia == contraseniaIS.value) {
    Swal.fire("¡Hola" + " " + usuarioBD + "!", "¡Bienvenido" + " " + "a Mis Patitas!" , "success");
    login.classList.add("ocultar")
    pantallaCompra.classList.remove("ocultar")
    pantallaCompra1.classList.remove("ocultar")
  } else {
    Swal.fire("Datos incorrectos" , "reintente", "error");
     }
}
)
// REGISTRO DE USUARIO Y LOGIN (USO DE LOCAL STORAGE Y JSON)

// USO DE FETCH, CARGA DE DATOS DESDE ARCHIVO.JSON, USO DE LIBRERIA , FUNCIONES , CONDICIONALES Y SINTAXIS AVANZADA 
fetch("./data.json")
  .then(respuesta => respuesta.json())
  .then(productos => miPrograma(productos))

function miPrograma(productos) {
  let carritoDOM = document.getElementById("carrito")
  let carrito = JSON.parse(localStorage.getItem("carrito")) || []

  renderizarCarrito(carrito)
  renderizarProductos(productos)

  function renderizarProductos(arrayProductos) {
    let contenedor = document.getElementById("wrapper")
    contenedor.innerHTML = ""
    arrayProductos.forEach(({ nombre, categoria, img, precio, stock, id }) => {
      let tarjetaProducto = document.createElement("div")
      tarjetaProducto.className = "tarjetaProducto"

      tarjetaProducto.innerHTML = `
      <h3 class=tituloProducto>${nombre}</h3>
      <p>${categoria}</p>
      <div class=imagen style="background-image: url(${img})"></div>
      <h4>PRECIO: ${precio}</h4>
      <p>Quedan<span id=span${id}>${stock}</span>unidades</p>
      <button id=${id}>AGREGAR AL CARRITO</button>
    `
      contenedor.appendChild(tarjetaProducto)

      let boton = document.getElementById(id)
      boton.addEventListener("click", agregarProductoAlCarrito)
    })
  }

  function agregarProductoAlCarrito(e) {

    let posicionProd = productos.findIndex(producto => producto.id == e.target.id)
    let productoBuscado = productos.find(producto => producto.id === Number(e.target.id))

    if (productos[posicionProd].stock > 0) {
      lanzarAlerta("Producto agregado", "Producto agregado correctamente", "success")

      let elementoSpan = document.getElementById("span" + e.target.id)
      productos[posicionProd].stock--
      elementoSpan.innerHTML = productos[posicionProd].stock

      if (carrito.some(({ id }) => id == productoBuscado.id)) {
        let pos = carrito.findIndex(({ id }) => id == productoBuscado.id)
        carrito[pos].unidades++
        carrito[pos].subtotal = carrito[pos].precio * carrito[pos].unidades
      } else {
        carrito.push({
          id: productoBuscado.id,
          nombre: productoBuscado.nombre,
          precio: productoBuscado.precio,
          unidades: 1,
          subtotal: productoBuscado.precio
        })
      }
      localStorage.setItem("carrito", JSON.stringify(carrito))
      renderizarCarrito(carrito)
    } else {
      lanzarAlerta("SIN STOCK", `Producto ${productoBuscado.nombre} sin stock`, "error")
    }
  }

  function renderizarCarrito(arrayDeProductos) {
    carritoDOM.innerHTML = ""
    arrayDeProductos.forEach(({ nombre, precio, unidades, subtotal }) => {
      carritoDOM.innerHTML += `<h5>${nombre} ${precio} ${unidades} ${subtotal}</h5>`
    })
    carritoDOM.innerHTML += `<button id=comprar>Finalizar compra</button>`

    let botonComprar = document.getElementById("comprar")
    botonComprar.addEventListener("click", finalizarCompra)
  }

  let buscador = document.getElementById("buscador")
  buscador.addEventListener("input", filtrar)

  function filtrar() {
    let arrayFiltrado = productos.filter(({ nombre }) => nombre.includes(buscador.value))
    renderizarProductos(arrayFiltrado)
  }

  let botonCarrito = document.getElementById("botonCarrito")
  botonCarrito.addEventListener("click", mostrarCarrito)

  function mostrarCarrito() {
    let contenedorProductos = document.getElementById("contenedorProductos")
    carritoDOM.classList.toggle("ocultar")
    contenedorProductos.classList.toggle("ocultar")
  }

  function lanzarAlerta(title, text, icon) {
    Swal.fire({
      title,
      text,
      icon
    })
  }

  function finalizarCompra() {
    lanzarAlerta("Gracias por su compra")
    localStorage.removeItem("carrito")
    carrito = []
    renderizarCarrito(carrito)
  }
}


