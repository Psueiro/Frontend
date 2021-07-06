const products = ["ring", "bracelet", "earring", "necklace", "watch", "bracelet", "earring", "necklace", "watch"]

function DisplayCatalog()
{
    for (i=0;i<products.length;i++)
    {
        var card = document.createElement("div");   
        card.id ="card";
        card.innerHTML = '<div class="card-body"><p class="card-name">'+products[i]+'</p> <img src="images/thumb.jpg" alt="Card image"><p class="card-text">of a card.</p></div>';              
        document.getElementById("catalog").appendChild(card);               
    }
}