const cardProduct = () => {
    document.getElementById('id02').style.display='block'
    const template = Handlebars.compile(
        `{{#each list}}
                <h2>{{title}}</h2>
				<h2>{{cost}}€</h2>	
		</section>
        {{/each}}`);
getCardProduct('giannistolou','89094280-bec2-4437-ae0e-ab78f54f029f').then(data => {     
    console.log(data.cartItems);
    console.log(template({ list: data.cartItems }));
    document.getElementById('cart-items').innerHTML = template({ list: data.cartItems });
    })
}
