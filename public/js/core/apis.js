const api_url = "https://wiki-shop.onrender.com/categories";    
async function getApi(url){
	try{
		const response = await fetch(url);
		var data = await response.json();
		return data;
	}catch{
		throw console.error(`problem with get api ${url}`);
	}
}

async function getCategories() {
    return await getApi(api_url).then(data => data)
} 

async function getSubCategories(id) {
    return await getApi(`${api_url}/${id}/subcategories`).then(data => data)
}

async function getSubCategoriesProducts(id) {
    return await getApi(`${api_url}/${id}/products`).then(data => data)
} 

async function getCardProduct(username) {
    return await getApi(`http://localhost:8080/card/${username}`).then(data => data)
} 

async function getUser(username){
	return await getApi(`http://localhost:8080/users/${username}`).then(data => data)
}