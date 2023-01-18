const cardProduct = (username,sessionId) => {
    
    const template = Handlebars.compile(
        `{{#each list}}
        <div  class="cart-item">
            <div class="about">
                <h1 class="title">{{title}}</h1>
            </div>
            <div class="counter">
                <div class="count">Quantity</div>
                <div class="btn">{{quantity}}</div>
            </div>
            <div class="prices">
                <div class="amount">{{cost}} €</div>
                <div class="remove"><u>Remove</u></div>
            </div>
            
        </div>	    
        {{/each}}`);
getCardProduct(username,sessionId).then(data => {     
    
    
    document.getElementById('cart-items').innerHTML = template({ list: data.cartItems });
    })
}
const cartTotal = () =>
{
    const template = Handlebars.compile(
        `
        
            <h2>Σύνολο: {{totalCost}} €</h2>
        `
    )
    getCardProduct(username,sessionId).then(data => {
            document.getElementById('total').innerHTML = template( data);
        })
}