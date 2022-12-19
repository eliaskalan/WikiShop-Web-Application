// Put your client side JS code here
console.log('Hello world')
fetch("https://wiki-shop.onrender.com/categories")
.then(res => {
    console.log(res.ok)
    console.log(res.status)
    console.log(res)
}).catch(err => console.log("Error"))