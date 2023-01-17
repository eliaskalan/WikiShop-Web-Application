const cardProduct = (username,sessionId) => {
    document.getElementById('id02').style.display='block'
    const template = Handlebars.compile(
        `{{#each list}}
                <h2>{{title}}</h2>
				<h2>{{cost}}€</h2>	
		</section>
        {{/each}}`);
getCardProduct(username,sessionId).then(data => {     
    console.log(data.cartItems);
    console.log(template({ list: data.cartItems }));
    document.getElementById('cart-items').innerHTML = template({ list: data.cartItems });
    })
}
