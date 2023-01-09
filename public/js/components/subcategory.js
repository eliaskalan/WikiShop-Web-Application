function productWithImage(data,category_id){
    var template = Handlebars.compile(
        `{{#each list}}<a href="/product?categoryId=${categoryId}&subcategoryId={{subcategory_id}}&productId={{id}}" class="product">
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
    </a>{{/each}}`);
    return template({ list: data });
}
function getFilterSubCategoriesProducts(id,data)
{
    let arrayProduct = [];
    for(let i = 0; i < data.length; i++){
    if(data[i].subcategory_id == id){
        arrayProduct.push(data[i]);
    }
    }
    return arrayProduct
}
function getProducts(category_id,subcategory_id,data){
    //TODO Rename
    document.getElementById("subcategories-list-products").innerHTML = productWithImage(getFilterSubCategoriesProducts(subcategory_id,data),category_id)
}

async function getInitialProducts(category_id){
    return getSubCategoriesProducts(category_id).then(data => {
        document.getElementById("subcategories-list-products").innerHTML = productWithImage(data,category_id)
    return data    
})
}

function filterSubCategory(data){
    const code = () => `
    {{#each list}}
        <li>
            <button class="category" onClick="renderProducts({{category_id}},{{id}})">{{title}}</button> 
        </li>
    {{/each}}`
    var template = Handlebars.compile(code());

            
    return template({ list: data });
}



