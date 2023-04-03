console.table(productos)
const carrito = [];
let contenedor = document.getElementById("misprods");

function crearProductos() {
    for (const producto of productos) {
        contenedor.innerHTML += `
            <div class="card col-sm-2">
                <img src=${producto.foto} class="card-img-top img-thumbnail" ; "alt="foto del producto">
                <div class="card-body">
                    <h5 class="card-title">${producto.id}</h5>
                    <p class="card-text">${producto.nombre}</p>
                    <p class="card-text">$ ${producto.precio}</p>
                    <button id='btn${producto.id}' class="btn btn-primary align-bottom">Comprar</button>
                </div>
            </div>   
        `;
    }
    productos.forEach((producto) => {
        document.getElementById(`btn${producto.id}`).addEventListener('click', () => {
            agregarAlCarro(producto)
        });
    })
}
crearProductos();

function agregarAlCarro(prodAgregar) {
    carrito.push(prodAgregar);
    console.table(carrito);
    alert(`Agregaste ${prodAgregar.nombre} al carrito !`);


    document.getElementById('tablabody').innerHTML += `
    <tr>
        <td>${prodAgregar.id}</td>
        <td>${prodAgregar.nombre}</td>
        <td>${prodAgregar.precio}</td>
    </tr>
    `;

let totalCarrito = carrito.reduce ((acumulador,producto)=> acumulador+producto.precio,0);
    document.getElementById('total').innerText = 'Total a pagar: $' +totalCarrito;
}
