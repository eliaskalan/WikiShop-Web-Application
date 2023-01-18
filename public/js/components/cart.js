const cardProduct = (data) => {
    
    const templateCartItems = Handlebars.compile(
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
        const templateTotalCost = Handlebars.compile(
            `
            
                <h2>Σύνολο: {{totalCost}} €</h2>
            `
        )
        document.getElementById('cart-items').innerHTML = templateCartItems({ list: data.cartItems });
        document.getElementById('total').innerHTML = templateTotalCost( data);
}
