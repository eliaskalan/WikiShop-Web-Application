function product(data){
    
    var template = Handlebars.compile(`
    
				<img src="{{list.image}}" width="300" height="300"
					alt="{{list.title}}" />
				<span class="id">Κωδικός: {{list.id}}</span> <br>
				
				</div>
				<p class="short-description">
                    {{list.description}}
				</p>
				<h2>{{list.cost}}€</h2>
				<button type="submit" class="primary-button product-primary-button">Προσθήκη στο καλάθι</button>
		</section>
        `);
        return template({ list: data });
}
function products(data){
    
    var template = Handlebars.compile(`{{#each list}}
    
				<img src="{{image}}" width="300" height="300"
					alt="{{title}}" />
				<span class="id">Κωδικός: {{id}}</span> <br>
				
				</div>
				<p class="short-description">
                    {{description}}
				</p>
				<h2>{{cost}}€</h2>
				<button type="submit" class="primary-button product-primary-button">Προσθήκη στο καλάθι</button>
		</section>
        {{/each}}`);
        return template({ list: data });
}
function getFilterSubCategoriesProducts(id,data)
{
    for(let i = 0; i < data.length; i++){
    if(data[i].id == id){
        return data[i]
    }
    }

}
function getProduct(product_id,category_id)
{
    getSubCategoriesProducts(category_id).then(data => {
        const single_product= getFilterSubCategoriesProducts(product_id,data)
        document.getElementById('subcategories-product').innerHTML = product(single_product)
        document.getElementById('product-title').innerHTML = single_product.title
        document.title=single_product.title
    })
}
function getProducts(category_id){
    getSubCategoriesProducts(category_id).then(data => {
    document.getElementById("subcategories-list-products").innerHTML = products(data)
})
}
