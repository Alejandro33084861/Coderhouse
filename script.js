let productos = [
  {
    idCat: 0,
    id: 0,
    nombre: "ZOGA",
    categoria: "JUGUETES",
    precio: 1000,
    stock: 4,
    img: "images/zoga1.jpg"
  },
  {
    idCat: 1,
    id: 1,
    nombre: "PELOTA",
    categoria: "JUGUETES",
    precio: 800,
    stock: 3,
    img: "images/pelota.WEBP"
  },
  {
    id: 2,
    nombre: "ROPA",
    categoria: "INDUMENTARIA",
    precio: 4500,
    stock: 5,
    img:"images/ropa.WEBP"
  },
    {
    id: 3,
    nombre: "CAMAS",
    categoria: "INDUMENTARIA",
    precio: 3000,
    stock: 1,
    img: "images/camas.jpg"
  },
  {
    id: 4,
    nombre: "PRETALES",
    categoria: "INDUMENTARIA",
    precio: 2000,
    stock: 6,
    img: "images/pretales.jpg"
  },
    {
    id: 5,
    nombre: "CORREAS",
    categoria: "ACCESORIOS",
    precio: 1000,
    stock: 5,
    img: "images/correas2.jpg"
  },
  {
    id: 6,
    nombre: "COLLARES",
    categoria: "ACCESORIOS",
    precio: 800,
    stock: 5,
    img: "images/collares1.jpg"
  },
  {
    id: 7,
    nombre: "CUCHAS",
    categoria: "ACCESORIOS",
    precio: 3000,
    stock: 1,
    img: "images/cama.jpg"
  }
]


let usuarioBD = "Alejandro"
let contraseniaBD = "Alejandro1987"

let login = document.getElementById("login")
let pantallaCompra = document.getElementById("pantallaCompra")

// REGISTRARSE
let usuario = document.getElementById("usuario")
let contrasenia = document.getElementById("contrasenia")
let registrarse = document.getElementById("registrarse")

registrarse.addEventListener("click", () => {
  console.log(usuario.value)
  console.log(contrasenia.value)
  let infoUsuario = { usuario: usuario.value, contrasenia: contrasenia.value}
  localStorage.setItem("infoUsuario", JSON.stringify(infoUsuario))
})

// INICIAR SESION
let usuarioIS = document.getElementById("usuarioIS")
let contraseniaIS = document.getElementById("contraseniaIS")
let iniciarSesion = document.getElementById("iniciarSesion")

iniciarSesion.addEventListener("click", () => {
  let infoUsuario = JSON.parse(localStorage.getItem("infoUsuario"))
  if (infoUsuario.usuario == usuarioIS.value && infoUsuario.contrasenia == contraseniaIS.value) {
    alert("Bienvenido" + " " + usuarioBD)   
    login.classList.add("ocultar")
    pantallaCompra.classList.remove("ocultar")
    pantallaCompra1.classList.remove("ocultar")
  } else {
    alert("Datos incorrectos, reintente")
  }
})

// BUSQUEDA, SELECCION Y COMPRA

let carritoDOM = document.getElementById("carrito")
let botonComprar = document.getElementById("comprar")
botonComprar.addEventListener("click", finalizarCompra)

function finalizarCompra() {
  alert("Muchas gracias por su compra")
  localStorage.removeItem("carrito")
  carrito = []
  renderizarCarrito(carrito)
}

let carrito = []
if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"))
  renderizarCarrito(carrito)
}

renderizarProductos(productos)

function renderizarProductos(arrayProductos) {
  let contenedor = document.getElementById("contenedorProductos")
  contenedor.innerHTML = ""
  arrayProductos.forEach(producto => {
    let tarjetaProducto = document.createElement("div")
    tarjetaProducto.className = "tarjetaProducto"

    tarjetaProducto.innerHTML = `
      <h4 class=tituloProducto>${producto.nombre}</h4>
      <p>${producto.categoria}</p>
      <div class=imagen style="background-image: url(${producto.img})"></div>
      <h4>PRECIO: ${producto.precio}</h4>
      <p>Quedan ${producto.stock} unidades</p>
      <button id=${producto.id}>AGREGAR AL CARRITO</button>
    `
    contenedor.appendChild(tarjetaProducto)

    let boton = document.getElementById(producto.id)
    boton.addEventListener("click", agregarProductoAlCarrito)
  })
}

function agregarProductoAlCarrito(e) {
  let productoBuscado = productos.find(producto => producto.id === Number(e.target.id))
  if (carrito.some(producto => producto.id == productoBuscado.id)) {
    let pos = carrito.findIndex(producto => producto.id == productoBuscado.id)
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
}

function renderizarCarrito(arrayDeProductos) {
  carritoDOM.innerHTML = ""
  arrayDeProductos.forEach(producto => {
    carritoDOM.innerHTML += `<h3>${producto.nombre} ${producto.precio} ${producto.unidades} ${producto.subtotal}</h3>`
  })
}

let buscador = document.getElementById("buscador")
buscador.addEventListener("input", filtrar)

function filtrar(e) {
  let arrayFiltrado = productos.filter(producto => producto.nombre.includes(buscador.value))
  renderizarProductos(arrayFiltrado)
}


