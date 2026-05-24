// tarea_arrays.ts — Parte A (Versión Alternativa)

// Interface base
interface Producto {
  id:         string
  nombre:     string
  precio:     number
  categoria:  string
  disponible: boolean
  tags:       string[]
}

// Datos de prueba — NO modificar en la Parte A
const productos: Producto[] = [
  { id: "p1", nombre: "Café negro",     precio: 2.5,  categoria: "bebidas",  disponible: true,  tags: ["caliente", "popular"]      },
  { id: "p2", nombre: "Jugo de naranja",precio: 3.0,  categoria: "bebidas",  disponible: true,  tags: ["frío", "natural"]          },
  { id: "p3", nombre: "Empanada queso", precio: 1.5,  categoria: "comidas",  disponible: false, tags: ["salado", "popular"]        },
  { id: "p4", nombre: "Agua mineral",   precio: 1.0,  categoria: "bebidas",  disponible: true,  tags: ["frío"]                     },
  { id: "p5", nombre: "Arepa reina",    precio: 4.0,  categoria: "comidas",  disponible: true,  tags: ["salado", "popular", "hot"] },
  { id: "p6", nombre: "Tequeño",        precio: 0.75, categoria: "snacks",   disponible: true,  tags: ["salado", "popular"]        },
  { id: "p7", nombre: "Brownie",        precio: 2.0,  categoria: "snacks",   disponible: false, tags: ["dulce"]                    },
  { id: "p8", nombre: "Smoothie mango", precio: 3.5,  categoria: "bebidas",  disponible: true,  tags: ["frío", "natural", "hot"]   },
]


// ══════════════════════════════════════════════════
// EJERCICIO 1 — filter()
// ══════════════════════════════════════════════════

// 1a. Filtra solo los productos que están disponibles (comparación explícita)
const disponibles: Producto[] = productos.filter(item => item.disponible === true)
console.log("1a. Disponibles:", disponibles.length) // debe ser 6

// 1b. Filtra los productos de la categoría "bebidas" (usando desestructuración)
const bebidas: Producto[] = productos.filter(({ categoria }) => categoria === "bebidas")
console.log("1b. Bebidas:", bebidas.map(item => item.nombre))

// 1c. Filtra los productos que cuestan menos de 2 dólares Y están disponibles
const economicos: Producto[] = productos.filter(prod => prod.disponible && prod.precio < 2.0)
console.log("1c. Económicos y disponibles:", economicos.map(prod => prod.nombre))


// ══════════════════════════════════════════════════
// EJERCICIO 2 — map()
// ══════════════════════════════════════════════════

// 2a. Crea un array con solo los nombres de todos los productos
const nombres: string[] = productos.map(producto => producto.nombre)
console.log("2a. Nombres:", nombres)

// 2b. Crea un array de objetos con solo { id, nombre, precio } (desestructuración en parámetros)
const resumen = productos.map(({ id, nombre, precio }) => ({
  id,
  nombre,
  precio
}))
console.log("2b. Resumen[1]:", resumen[0])
console.log("2b. Resumen[2]:", resumen[1])
console.log("2b. Resumen[3]:", resumen[2])
console.log("2b. Resumen[4]:", resumen[3])
console.log("2b. Resumen[5]:", resumen[4])
console.log("2b. Resumen[6]:", resumen[5])
console.log("2b. Resumen[7]:", resumen[6])
console.log("2b. Resumen[8]:", resumen[7])

// 2c. Crea un array con los precios aumentados un 10% (usando parseFloat y bloque de código)
const preciosNuevos = productos.map(item => {
  const precioConAumento = item.precio * 1.10
  return parseFloat(precioConAumento.toFixed(2))
})
console.log("2c. Precios con 10% aumento:", preciosNuevos)


// ══════════════════════════════════════════════════
// EJERCICIO 3 — find()
// ══════════════════════════════════════════════════

// 3a. Encuentra el producto con id "p5"
const producto = productos.find(p => p.id === "p5")
console.log("3a. Producto p5:", producto?.nombre) 

// 3b. Encuentra el primer producto de la categoría "snacks"
const primerSnack = productos.find(({ categoria }) => categoria === "snacks")
console.log("3b. Primer snack:", primerSnack?.nombre) 

// 3c. Busca un producto que no existe (id "p99")
const noExiste = productos.find(item => item.id === "p99")
if (noExiste) {
  console.log("3c. Encontrado:", noExiste.nombre)
} else {
  console.log("3c. Producto no encontrado") 
}


// ══════════════════════════════════════════════════
// EJERCICIO 4 — includes()
// ══════════════════════════════════════════════════

// 4a. Verifica si el producto p1 tiene el tag "popular" (evaluando por separado)
const productoP1 = productos.find(p => p.id === "p1")
const tienePopular: boolean = productoP1 ? productoP1.tags.includes("popular") : false
console.log("4a. p1 tiene tag 'popular':", tienePopular) 

// 4b. Crea un array con los nombres de los productos que tienen el tag "natural" (usando indexOf)
const naturales: string[] = productos
  .filter(item => item.tags.indexOf("natural") !== -1)
  .map(item => item.nombre)
console.log("4b. Productos naturales:", naturales)

// 4c. Un usuario tiene estos productos en su carrito:
const carrito: string[] = ["p2", "p6", "p8"]
// Verifica si el producto "p3" está en el carrito (con indexOf en lugar de includes)
const estaEnCarrito: boolean = carrito.indexOf("p3") !== -1
console.log("4c. p3 en carrito:", estaEnCarrito)


// ══════════════════════════════════════════════════
// EJERCICIO 5 — COMBINADOS (el más importante)
// ══════════════════════════════════════════════════

// 5a. Obtén los nombres de los productos disponibles de la categoría "bebidas"
const bebidasDisponibles: string[] = productos
  .filter(prod => {
    return prod.disponible && prod.categoria === "bebidas"
  })
  .map(prod => prod.nombre)
console.log("5a. Bebidas disponibles:", bebidasDisponibles)

// 5b. Encuentra el producto MÁS CARO que esté disponible (con nombres de parámetros descriptivos)
const enStock = productos.filter(item => item.disponible)

const masCaro: Producto | undefined = enStock.length > 0
  ? enStock.reduce((acumulador, valorActual) => {
      return valorActual.precio > acumulador.precio ? valorActual : acumulador
    })
  : undefined

console.log("5b. Más caro disponible:", masCaro?.nombre, "$" + masCaro?.precio)

// 5c. ¿Hay algún producto disponible en la categoría "snacks" con el tag "popular"?
// (Aplicando desestructuración completa en el some)
const haySnackPopular: boolean = productos.some(
  ({ disponible, categoria, tags }) => disponible && categoria === "snacks" && tags.includes("popular")
)
console.log("5c. Snack popular disponible:", haySnackPopular)