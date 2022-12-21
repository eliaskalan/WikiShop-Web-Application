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
    show(data);
}
getapi(api_url);
// function hideloader()
// {
//     document.getElementById('loading').style.display="none";
// }
function show(data){
    let tab = 
    `<tr>
          <th>id</th>
          <th>title</th>
          <th>img_url</th>
         </tr>`;
    for (let r of data) {
            tab += `<tr> 
            <td>${r.id} </td>
            <td>${r.title}</td>
            <td>${r.img_url}</td>           
            </tr>`;
        }
        // Setting innerHTML as tab variable
        document.getElementById("para").innerHTML = tab;
}

