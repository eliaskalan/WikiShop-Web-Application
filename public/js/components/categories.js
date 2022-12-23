function categoryWithOutImage(data){
    var template = Handlebars.compile(`{{#each list}}<li><a class="category" href="/categories?categoryId={{id}}">{{title}}</a> </li>{{/each}}`);
    return template({ list: data });
}

function categoryWithImage(data){
    var template = Handlebars.compile(`{{#each list}}
    <a href="/categories?categoryId={{id}}" class="category">
                    <h3>{{title}}</h3>
                    <img src="{{img_url}}" width="300" height="300"></img>  
                </a>
                {{/each}}`);
    return template({ list: data });
   
}