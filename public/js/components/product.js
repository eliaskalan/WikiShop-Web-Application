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
function getFitlerSubCategoriesProducts(id,data)
{
    for(let i = 0; i < data.length; i++){
    if(data[i].id == id){
        return data[i]
    }
    }

}
function getProducts(produt_id,category_id)
{
    getSubCategoriesProducts(category_id).then(data => {
        const single_product= getFitlerSubCategoriesProducts(produt_id,data)
        console.log(single_product)
        document.getElementById('subcategories-product').innerHTML = product(single_product)
        document.getElementById('product-title').innerHTML = single_product.title
    })
}