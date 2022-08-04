let catalog = {
    data: [
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "./img/ubits.png",
        inventory: 3,
      },
      {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "49",
        image: "./img/ubits.png",
        inventory: 3,
      },
      {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "./img/ubits.png",
        inventory: 3,
      },
      {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "./img/ubits.png",
        inventory: 3,
      },
      {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "./img/ubits.png",
        inventory: 3,
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "./img/ubits.png",
        inventory: 3,
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "./img/ubits.png",
        inventory: 3,
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "./img/ubits.png",
        inventory: 3,
      },
    ],
  };
  for (let i of catalog.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price + " MXN";
    container.appendChild(price);

    let division = document.createElement("hr");
    container.appendChild(division);

    //inventory 
    let inventoryMinus = document.createElement("button");
    inventoryMinus.innerText = "-";
    inventoryMinus.classList.add("catalog-button");    
    container.appendChild(inventoryMinus);

    let inventory = document.createElement("span");
    inventory.innerText = i.inventory;
    container.appendChild(inventory);

    let inventoryPlus = document.createElement("button");
    inventoryPlus.innerText = "+";
    inventoryPlus.classList.add("catalog-button");
    container.appendChild(inventoryPlus);

    //buy
    let buying = document.createElement("button");
    buying.innerText = "Buy".toUpperCase();
    buying.classList.add("catalog-button");    
    container.appendChild(buying);

    card.appendChild(container);
    document.getElementById("catalog").appendChild(card);
  }
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".filter-button");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });

  //Modifying numbers
  // function modifyInventory(value) {

  // }

  // document.getElementById("buy").addEventListener("submit", () => {

  // });

  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };