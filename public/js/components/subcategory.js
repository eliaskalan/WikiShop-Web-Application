function categoryWithOutImage(data){
    var template = Handlebars.compile(
        `{{#each list}}<div class="product">
        <div class="product-image-parent">
            <img src="{{image}}" class="product-image"
                alt="{{title}}" />
        </div>
        <ul>
            <li>
                <h3>{{title}}</h3>
            </li>
            <li>
                <p>{{cost}}€</p>
            </li>
        </ul>
    </div>{{/each}}`);
    return template({ list: data });
}
function getFitlerSubCategoriesProducts(id,data)
{
    let arrayProduct = [];
    for(let i = 0; i < data.length; i++){
    if(data[i].subcategory_id == id){
        arrayProduct.push(data[i]);
    }
    }
    return arrayProduct
}

function getProducts(category_id,subcategory_id){
    getSubCategoriesProducts(category_id).then(data => {
    document.getElementById("subcategories-list").innerHTML = categoryWithOutImage(getFitlerSubCategoriesProducts(subcategory_id,data))
})
}


