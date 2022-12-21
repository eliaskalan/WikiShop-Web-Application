//const { response } = require("express")

// Put your client side JS code here
console.log('Hello world')


    
const api_url = "https://wiki-shop.onrender.com/categories";

async function getapi(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    // if (response){
    //     hideloader();
    // }
    category_template(data);
}
//getapi(api_url);
// function hideloader()
// {
//     document.getElementById('loading').style.display="none";
// }

function category_template(name){
    // compile the template
    var template = Handlebars.compile(`<ul>{{#each doesWhat}}<li><a class="category" href="./categories/{{id}}">{{title}}</a> </li>{{/each}}</ul>`);
    // execute the compiled template and print the output to the console
    var tab = template({ doesWhat: name });
    console.log(tab);
    document.getElementById("para").innerHTML = tab;
}
