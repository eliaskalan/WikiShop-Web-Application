//const { response } = require("express")

// Put your client side JS code here
console.log('Hello world')



const api_url = "https://wiki-shop.onrender.com/categories";
async function getCategories() {
    return await getapi(api_url).then(data => data)
    
    
} 

async function getapi(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    // if (response){
    //     hideloader();
    // }
    return data;
}
//getapi(api_url);
// function hideloader()
// {
//     document.getElementById('loading').style.display="none";
// }

function categories_template(name){
    // compile the template
    var template = Handlebars.compile(`<ul>{{#each doesWhat}}<li><a class="category" href="/categories/{{id}}">{{title}}</a> </li>{{/each}}</ul>`);
    // execute the compiled template and print the output to the console
    var tab = template({ doesWhat: name });
    console.log(tab);
    document.getElementById("para").innerHTML = tab;
}

function index_categories(name){
    // compile the template
    var template = Handlebars.compile(`{{#each doesWhat}}
    <a href="/categories/{{id}}" class="category">
                    <h3>{{title}}</h3>
                    <img src="{{img_url}}" width="300" height="300"></img>  
                </a>
                {{/each}}`);
    // execute the compiled template and print the output to the console
    var tab = template({ doesWhat: name });
    console.log(tab);
    document.getElementById("para").innerHTML = tab + document.getElementById("para").innerHTML;
}

function category_template(name){
    
}