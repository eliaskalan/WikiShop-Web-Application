function product(data){
    
    var template = Handlebars.compile(`
    
				<img src="{{item.image}}" width="300" height="300"
					alt="{{item.title}}" />
				<span class="id">Κωδικός: {{item.id}}</span> <br>
				
				</div>
				<p class="short-description">
                    {{item.description}}
				</p>
				<h2>{{item.cost}}€</h2>
                <button class="primary-button product-primary-button" onclick=\"buyProduct({{item.title}}, {{item.cost}})\" >Προσθήκη στο καλάθι</button>
		</section>
        `);
        return template({ item: data });
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
				<span class="primary-button product-primary-button go-next">Δες περισσότερα</span>
		</section>
        {{/each}}`);
        return template({ list: data });
}
function getFilterSubCategoriesProducts(id,data)
{
    for(let i = 0; i < data.length; i++){
    if(data[i].id == id){
        data[i].title = JSON.stringify(data[i].title).toString();
        return data[i];
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
    const newData = data.map((item) => JSON.stringify(item.title));
    document.getElementById("subcategories-list-products").innerHTML = products(newData)
})
}
