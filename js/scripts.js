const cartButton = document.getElementById("cartButton");
const popup = document.getElementById("popup");

cartButton.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.add("hidden");
});

document.addEventListener("click", (e) => {
  if (!cartButton.contains(e.target) && e.target !== popup) {
    console.log("salio");
    popup.classList.remove("hidden");
  }
});

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
      eliminarBtn.classList.add("btn-delete");
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

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const errorMessages = [];

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre) {
      errorMessages.push('El campo "Nombre" es obligatorio.');
    }

    if (!email) {
      errorMessages.push('El campo "Correo electrónico" es obligatorio.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errorMessages.push("El formato del correo electrónico no es válido.");
    }

    if (!mensaje) {
      errorMessages.push('El campo "Mensaje" es obligatorio.');
    }

    const errorDiv = document.getElementById("errorMessages");
    if (errorMessages.length > 0) {
      errorDiv.innerHTML = errorMessages.join("<br>");
    } else {
      errorDiv.innerHTML = "";
      alert("Formulario enviado con éxito!");

      this.submit();
    }
  });
