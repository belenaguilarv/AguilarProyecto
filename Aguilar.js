// Inventario de la Farmacia
let nombre

function perfume(id, name, category, price, imagen){
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.imagen = imagen;
}
function esmalte(id, name, category, price, imagen){
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.imagen = imagen;
}
function desodorante(id, name, category, price, imagen){
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.imagen = imagen;
}
function protectorSolar(id, name, category, price, imagen){
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.imagen = imagen;
}

const perfume1 = new perfume(1, "Jadore Dior", "Perfume", 25000, "JadoreDior.jpg")
const perfume2 = new perfume(2, "N5 Chanel", "Perfume", 20000, "N5Chanel.jpg")
const perfume3 = new perfume(3, "Fresh Gold Moschino", "Perfume", 28000, "FreshGoldMoshino.jpg")
const perfume4 = new perfume(4, "Bright Crystal Versace", "Perfume", 35000, "BrightCrystalVersace.jpg")

const esmalte1 = new esmalte(5, "Rosa Sally Hensen", "Esmalte", 1250,"SallyHensenRosa.jpg" )
const esmalte2 = new esmalte(6, "Azul OPI", "Esmalte", 220, "OPIAzul.jpg")
const esmalte3 = new esmalte(7, "Amarillo Chanel", "Esmalte", 1300, "ChanelAmarillo.jpg")
const esmalte4 = new esmalte(8, "Verde Cherimoya", "Esmalte", 1200, "CherimoyaVerde.jpg")

const desodorante1 = new desodorante(9, "Dove Clinical", "Desodorante", 930, "Dove.jpg")
const desodorante2 = new desodorante(10, "Rexona", "Desodorante", 720, "Rexona.jpg")
const desodorante3 = new desodorante(11, "Nivea", "Desodorante", 800, "Nivea.jpg")

const protectorSolar1 = new protectorSolar(12, "Isdin SPF50+", "Protector Solar", 4300, "Isdin.jpg")
const protectorSolar2 = new protectorSolar(13, "La Roche Posay - DryTouch SPF30+", "Protector Solar", 2489, "LaRochePosay.jpg")
const protectorSolar3 = new protectorSolar(14, "Eucerin SPF50+", "Protector Solar", 3200, "Eucerin.jpg")
const protectorSolar4 = new protectorSolar(15, "Bioderma - NudeTouch SPF50+", "Protector Solar", 5100, "Bioderma.jpg")


let perfumesA = [perfume1, perfume2, perfume3, perfume4]
let esmaltesA = [esmalte1, esmalte2, esmalte3, esmalte4]
let desodorantesA = [desodorante1, desodorante2, desodorante3]
let protectoresSolaresA = [protectorSolar1, protectorSolar2, protectorSolar3, protectorSolar4]

function limpiar() {
    let divPerfumes = document.getElementById("perfume")
    let divEsmaltes = document.getElementById("esmalte")
    let divDesodorante = document.getElementById("desodorante")
    let divProtectorSolar = document.getElementById("protectorSolar")
    divPerfumes.innerHTML = ""
    divEsmaltes.innerHTML = ""
    divDesodorante.innerHTML = ""
    divProtectorSolar.innerHTML = ""
}

let productosEnCarrito = []

function mostrarPerfumes(array) {
    limpiar()
    let divPerfumes = document.getElementById("perfume")

    perfumesA.forEach((perfume) => {

        let nuevoPerfume = document.createElement("div")

        nuevoPerfume.innerHTML = `<div id="${perfume.id}" class="card" style="width: 18rem;">
                                          <img class="card-img-top" src="images/${perfume.imagen}" alt="perfume">
                                          <div class="card-body">
                                              <h4 class="card-title">${perfume.name}</h4>
                                                  <p>Categoria: ${perfume.category}</p>
                                                  <p class="">Precio: $${perfume.price}</p>
                                              <button class="btn btn-outline-success btnComprar">Agregar al carrito</button>
                                          </div>
                                      </div>`
        divPerfumes.append(nuevoPerfume)

        let btnAgregar = document.getElementById(`agregarBtn${perfume.id}`)

        btnAgregar.addEventListener("click", () => {

            agregarAlCarritoPerfume(perfume)

        })

    })
}

function agregarAlCarritoPerfume (perfume) {
    productosEnCarrito.push(perfume)
    console.log(productosEnCarrito)

}

function mostrarEsmaltes(array) {
    limpiar()
    let divEsmaltes = document.getElementById("esmalte")

    esmaltesA.forEach((esmalte) => {

        let nuevoEsmalte = document.createElement("div")

        nuevoEsmalte.innerHTML = `<div id="${esmalte.id}" class="card" style="width: 18rem;">
                                          <img class="card-img-top" src="images/${esmalte.imagen}" alt="esmalte">
                                          <div class="card-body">
                                              <h4 class="card-title">${esmalte.name}</h4>
                                                  <p>Categoria: ${esmalte.category}</p>
                                                  <p class="">Precio: $${esmalte.price}</p>
                                              <button class="btn btn-outline-success btnComprar">Agregar al carrito</button>
                                          </div>
                                      </div>`
        divEsmaltes.append(nuevoEsmalte)

        let btnAgregar = document.getElementById(`agregarBtn${esmalte.id}`)

        btnAgregar.addEventListener("click", () => {

            agregarAlCarritoEsmalte(esmalte)

        })

    })
}

function agregarAlCarritoEsmalte (esmalte) {
    productosEnCarrito.push(esmalte)
    console.log(productosEnCarrito)

}

function mostrarDesodorantes(array) {
    limpiar()
    let divDesodorantes = document.getElementById("desodorante")

    desodorantesA.forEach((desodorante) => {

        let nuevoDesodorante = document.createElement("div")

        nuevoDesodorante.innerHTML = `<div id="${desodorante.id}" class="card" style="width: 18rem;">
                                          <img class="card-img-top" src="images/${desodorante.imagen}" alt="desodorante">
                                          <div class="card-body">
                                              <h4 class="card-title">${desodorante.name}</h4>
                                                  <p>Categoria: ${desodorante.category}</p>
                                                  <p class="">Precio: $${desodorante.price}</p>
                                              <button class="btn btn-outline-success btnComprar">Agregar al carrito</button>
                                          </div>
                                      </div>`
        divDesodorantes.append(nuevoDesodorante)

        let btnAgregar = document.getElementById(`agregarBtn${desodorante.id}`)

        btnAgregar.addEventListener("click", () => {

            agregarAlCarritoDesodorante(desodorante)

        })

    })
}

function agregarAlCarritoProtectorSolar (desodorante) {
    productosEnCarrito.push(desodorante)
    console.log(productosEnCarrito)

}

function mostrarProtectorSolar(array) {
    limpiar()
    let divProtectorSolar = document.getElementById("protectorSolar")

    protectoresSolaresA.forEach((protectorSolar) => {

        let nuevoProtectorSolar = document.createElement("div")

        nuevoProtectorSolar.innerHTML = `<div id="${protectorSolar.id}" class="card" style="width: 18rem;">
                                          <img class="card-img-top" src="images/${protectorSolar.imagen}" alt="protectorSolar">
                                          <div class="card-body">
                                              <h4 class="card-title">${protectorSolar.name}</h4>
                                                  <p>Categoria: ${protectorSolar.category}</p>
                                                  <p class="">Precio: $${protectorSolar.price}</p>
                                              <button class="btn btn-outline-success btnComprar">Agregar al carrito</button>
                                          </div>
                                      </div>`
        divProtectorSolar.append(nuevoProtectorSolar)

        let btnAgregar = document.getElementById(`agregarBtn${protectorSolar.id}`)

        btnAgregar.addEventListener("click", () => {

            agregarAlCarritoProtectorSolar(protectorSolar)

        })

    })
}

function agregarAlCarritoProtectorSolar (protectorSolar) {
    productosEnCarrito.push(protectorSolar)
    console.log(productosEnCarrito)

}
let btnCarrito = document.getElementById("btnCarrito")
let modalBody = document.getElementById("modal-body")
let btnFinalizarCompra = document.getElementById("btnFinalizarCompra")
let parrafoCompra = document.getElementById('Total')

btnCarrito.addEventListener("click", ()=>{
    cargarProductosCarrito(productosEnCarrito)
})


btnFinalizarCompra.addEventListener ("click", () => {

    let productosEnCarritoJSON = JSON.stringify(productosEnCarrito);
    localStorage.setItem("Compra", productosEnCarritoJSON);
    alert("Muchas Gracias por tu compra!")
})

//Funcion que va cargando cada producto al carrito de compras
function cargarProductosCarrito(array){
    modalBody.innerHTML = ""

    array.forEach((productoCarrito)=>{

        modalBody.innerHTML += `

	        <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.name}" style="max-width: 200px;">
	            <img class="card-img-top" src="images/${productoCarrito.imagen}" alt="${productoCarrito.name}">
	            <div class="card-body">
	                    <h4 class="card-title">${productoCarrito.category}</h4>
	                
	                    <p class="card-text">$${productoCarrito.price}</p> 
	                    <button class= "btn btn-danger" id="botonEliminar"><i class="fas fa-trash-alt"></i></button>
	            </div>    
	        
	        
	        </div>`

    })
//Funcion que calcula el monto total a pagar
function Total(array){
        let a = 0

        a = array.reduce((a, productoCarrito)=>{
            return a + productoCarrito.price
        },0)
        if(a == 0){
            parrafoCompra.innerHTML = `<strong>No hay productos en el carrito</strong>`
        }
        else{
            parrafoCompra.innerHTML = `El total de su compra es $${a}`
        }
    }
    Total(array)
}

let mostrarPerfumesBtn = document.getElementById("mostrarPerfumesBtn")
mostrarPerfumesBtn.addEventListener("click",mostrarPerfumes)

let mostrarEsmaltesBtn = document.getElementById("mostrarEsmaltesBtn")
mostrarEsmaltesBtn.addEventListener("click",mostrarEsmaltes)

let mostrarDesodorantesBtn = document.getElementById("mostrarDesodorantesBtn")
mostrarDesodorantesBtn.addEventListener("click",mostrarDesodorantes)

let mostrarProtectoresSolaresBtn = document.getElementById("mostrarProtectoresSolaresBtn")
mostrarProtectoresSolaresBtn.addEventListener("click",mostrarProtectorSolar)

// Funcion que busca a los productos ingresando categorias (agregar a palabraas en general)
function buscarporCategoria(){
    let buscarProducto = document.getElementById("buscarProducto")
    switch (buscarProducto.value.toLowerCase()){
        case "perfume":
            mostrarPerfumes()
            break;
        case "esmalte":
            mostrarEsmaltes()
            break;
        case "desodorante":
            mostrarDesodorantes()
            break;
        case "protector solar":
            mostrarProtectorSolar()
            break;
        default:
            buscarProducto = ("No se encuentra el producto.")
    }
}
