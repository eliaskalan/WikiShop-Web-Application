const cardProduct = (data) => {
    
    const templateCartItems = Handlebars.compile(
        `{{#each list}}
        <div  class="cart-item">
            <h3 class="cart-item-title">
               {{title}}
            </h3>
            <div class="counter">
                <div class="count">Quantity</div>
                <div class="btn">{{quantity}}</div>
            </div>
            <div class="prices">
                <div class="amount">{{cost}} €</div>
            </div>
            
        </div>	    
        {{/each}}`);
        const templateTotalCost = Handlebars.compile(
            `
            
                <span class="total-cost">{{totalCost}}<span> €</h2>
            `
        )
        document.getElementById('cart-items').innerHTML = templateCartItems({ list: data.cartItems });
        document.getElementById('total').innerHTML =  document.getElementById('total').innerHTML+ templateTotalCost( data);
}
