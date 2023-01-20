

const api_url = "https://wiki-shop.onrender.com/categories";
async function getApi(url) {
	try {
		const response = await fetch(url);
		var data = await response.json();
		return data;
	} catch {
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

async function getCardProduct(username, sessionId) {
	return await getApi(`http://localhost:8080/card/${username}/${sessionId}`).then(data => data)
}
async function buyProductConnect(productName, productPrice, username, token) {
	try {
		const response = await fetch(`http://localhost:8080/cart/buy/`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name: productName, cost: productPrice, username, token  })
		});
		var data = await response.json();
		if(data.status === 'DONE'){
			window.sessionStorage.setItem("totalItems", data.size);
			alert('Προστέθηκε στο καλάθι με επιτυχία');
			window.location.replace('/cart?'+`username=${username}&sessionId=${token}`);
		}else{
			alert('Υπήρξε κάποιο πρόβλημα');
		}

	} catch {

	}
}

function buyProduct(productName, productPrice) {
	const userData = getUserData();
	if (userData) {
		buyProductConnect(productName, productPrice, userData.username, userData.token).then((data) => {
			console.log('data', data);
		})
	} else {
		alert('Παρακαλώ συνδεθείτε για προσθήκη προϊόντων στο καλάθι')
	}
} 
