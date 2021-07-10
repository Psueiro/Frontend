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

function DisplayPurchases()
{
    for (i=0;i<products.length;i++)
    {
        var card = document.createElement("div");   
        card.id ="card";
        card.innerHTML = 
        `  <div class ="product">
        <p class="productname">
            <b>
                `+products[i].name +`
            </b>
        </p>
        <p class="productprice">
                `+products[i].price +`
        </p>
        <div class ="removebutton">
            <button type="button" class="btn btn-outline-danger">Cancel</button>
        </div>
         </div>
         <hr>`;              
        document.getElementById("listofpurchases").appendChild(card);               
    }
}