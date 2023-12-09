for (let i of catalog.data) {
    // Create card
    let card = document.createElement("div");
    card.setAttribute("id", i.productName);
    // Estado inicial del card oculto
    card.classList.add("card", i.category, "hide");
    // image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    // etiqueta img
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    // container
    let container = document.createElement("div");
    container.classList.add("container");
    // nombre del producto
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    // precio
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    // Inventario
    let inventory = document.createElement("h6");
    inventory.innerText = "Disponibles: " + i.inventory;
    container.appendChild(inventory);

    let division = document.createElement("hr");
    container.appendChild(division);

    // inventario
    let order = document.createElement("input");
    order.setAttribute("type", "number");
    order.setAttribute("min", "1");
    order.setAttribute("max", i.inventory);
    order.value = "1";
    container.appendChild(order);

    // compras
    let buying = document.createElement("button");
    order.setAttribute("type", "submit");
    buying.innerText = "Comprar".toUpperCase();
    buying.classList.add("catalog-button");
    container.appendChild(buying);

    card.appendChild(container);
    document.getElementById("catalog").appendChild(card);
}

// filtros
function filterProduct(value) {
    // button
    let buttons = document.querySelectorAll(".filter-button");
    buttons.forEach((button) => {
        // comprobar los inputs
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    //seleccionar todas las cards
    let elements = document.querySelectorAll(".card");

    elements.forEach((element) => {
        if (value == "Todos") {
            element.classList.remove("hide");
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        }
    });
}

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
    });
})

window.onload = () => {
    filterProduct("Todos");
}