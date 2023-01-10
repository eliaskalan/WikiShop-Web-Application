// function categoryWithOutImage(data){
//     var template = Handlebars.compile(`
//     {{#each list}}
//         <li>
//             <a class="category" href="/categories?categoryId={{id}}">{{title}}</a> 
//         </li>
//     {{/each}}`);

            
//     return template({ list: data });
// }

function categoryWithImage(data){
    // TODO remove css from html code
    var template = Handlebars.compile(`{{#each list}}
    <a href="/categories?categoryId={{id}}" class="category">
                    <h3>{{title}}</h3>
                    <img src="{{img_url}}" width="300" height="300"></img> 
                    

                </a>
                {{/each}}`);
    return template({ list: data });
   
}

function categoryWithOutImage(data, category_id){
    const has_category=category_id != undefined
    const link = (has_category_id) => {
     if(has_category_id){
      return `/categories?categoryId=${category_id}&subcategoryId={{id}}`
      }
      return `/categories?categoryId={{id}}`
    }
    const code = () => `
    {{#each list}}
        <li>
            <a class="category" href="${link(has_category)}">{{title}}</a> 
        </li>
    {{/each}}`
    var template = Handlebars.compile(code());

            
    return template({ list: data });
}

function filterList(data){
    var template = Handlebars.compile(`{{#each list}}
        <input type="radio" id="{{id}}" name="subcategory" value="{{id}}" />
        <label for="{{id}}">{{title}}</label>
                
    {{/each}}`);
    return template({ list: data });
}

