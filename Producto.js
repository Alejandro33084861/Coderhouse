class Producto {
  constructor (idCat, id, nombre, categoria, precio, stock) {
    this.idCat = idCat
    this.id = id
    this.nombre = nombre
    this.categoria = categoria
    this.precio = precio
    this.stock = stock
  }
  aplicarDescuento () {
    return 
  }
  comprar() {
    this.vendido = true
  }
}