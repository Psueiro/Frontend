//const products = ["ring", "bracelet", "earring", "necklace", "watch", "bracelet", "earring", "necklace", "watch"]
//Product information
//const connection = require('app')

function Product(name, price, description, image)
{
    this.name = name
    this.price = price
    this.description = description
    this.image = image
}

let product1 = new Product("Ring", 300, "Silver ring", "../images/ring.jpg")
let product2 = new Product("Necklace", 350, "Silver Necklace", "../images/necklace.jpg")
let product3 = new Product("Bracelet", 360, "Silver Bracelet", "../images/bracelet.jpg")

const products = [];

products.push(product1,product2,product3);

function DisplayCatalog()
{
    for (i=0;i<products.length;i++)
    {
        var card = document.createElement("div");   
        card.id ="card";
        card.innerHTML = 
        `<div class="card-body" onclick="DisplayDetailedView(`
        +i+`)">        
            <p class="card-name">`
            +products[i].name+`
            </p> 
            <img src=
            `+products[i].image+`
             alt="Product image">
            <p class="card-text">`
            +products[i].description+`
            </p>
        </div>`;              
        document.getElementById("catalog").appendChild(card);               
    }
}

function DisplayDetailedView(index)
{
    var modal = document.getElementById("myModal");
    modal.style.display = "block";    
    
    var modalcontent = document.getElementById("modal-content")
    modalcontent.innerHTML =
    `    <span class="close">&times;</span>
        <h2 class = "name of product">
            `+ products[index].name +`
        </h2>
        <div class ="bodyframe">
        <div class="imageframe">
        <img src=
        `+products[index].image+`
        alt="Product image">
        </div>
        
        <div class="descriptionframe">
        <p class ="price">
        `+ products[index].price +` $
        </p>
        
        <p class ="description">
        description of product Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nam in alias accusantium est sapiente soluta illo dicta recusandae, mollitia expedita incidunt voluptas corporis, iusto facilis atque quibusdam itaque quod!
        </p>        
        </div>
        </div>
        
        
        <button type="button" class="btn btn-primary">Buy</button>
        <button type="button" class="btn btn-outline-primary">Add to Wishlist</button>
    `;

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";

    };

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    };
}