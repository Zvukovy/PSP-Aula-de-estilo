// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const carrito = [];
    const carritoLista = document.getElementById("carrito-lista");
    const totalSpan = document.getElementById("total");

    document.querySelectorAll(".add-to-cart").forEach((boton) => {
        boton.addEventListener("click", () => {
            const producto = boton.getAttribute("data-producto");
            const precio = parseFloat(boton.getAttribute("data-precio"));

            carrito.push({ producto, precio });
            actualizarCarrito();
        });
    });

    document.getElementById("vaciar-carrito").addEventListener("click", () => {
        carrito.length = 0; // Vaciar el carrito
        actualizarCarrito();
    });

    function actualizarCarrito() {
        carritoLista.innerHTML = "";
        let total = 0;

        carrito.forEach((item, index) => {
            total += item.precio;

            const li = document.createElement("li");
            li.textContent = `${item.producto} - ${item.precio} COP`;

            const eliminarBtn = document.createElement("button");
            eliminarBtn.textContent = "Eliminar";
            eliminarBtn.addEventListener("click", () => {
                carrito.splice(index, 1);
                actualizarCarrito();
            });

            li.appendChild(eliminarBtn);
            carritoLista.appendChild(li);
        });

        totalSpan.textContent = total.toFixed(2);
    }
});
// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const barras = document.querySelectorAll(".grafico-barras .barra .relleno");

    barras.forEach((barra) => {
        const valor = barra.getAttribute("data-valor");
        barra.style.width = `${valor}%`;
    });
});
