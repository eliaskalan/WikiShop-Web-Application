const express = require('express')
const path = require('path')
const app = express()
const port = 8080


app.listen(port)
const fs = require('fs');
/* 
    Serve static content from directory "public",
    it will be accessible under path /, 
    e.g. http://localhost:8080/index.html
*/
app.use(express.static('public'))

const root = path.join(__dirname, 'views');

// parse url-encoded content from body
app.use(express.urlencoded({ extended: false }))

// parse application/json content from body
app.use(express.json())

// serve index.html as content root
app.get('/', function(req, res){

    var options = {
        root
    }

    res.sendFile('index.html', options, function(err){
        console.log(err)
    })

})

app.get('/categories', function(req, res){
    var options = {
        root
    }
    console.log(req.query)
    if(req.query.categoryId && req.query.subcategoryId){
        res.sendFile('category.html', options, function(err){
            console.log(err)
        })
    }else if(req.query.categoryId){
        res.sendFile('category.html', options, function(err){
            console.log(err)
        })
    }else{
        res.sendFile('product-categories.html', options, function(err){
            console.log(err)
        })
    }
});


app.get('/about-us', function(req, res){

    var options = {
        root,

    }

    res.sendFile('about-us.html', options, function(err){
        console.log(err)
    })
    
})

app.get('/contactus', function(req, res){

    var options = {
        root

    }

    res.sendFile('contactus.html', options, function(err){
        console.log(err)
    })
    
})


app.get('/product', function(req, res){
    var options = {
        root,

    }

   
    if(req.query.categoryId && req.query.subcategoryId && req.query.productId){
        res.sendFile('product.html', options, function(err){
            console.log(err)
        })
    }
})


app.get('/card/:username', (req, res) => {
    const username = req.params.username
    let rawdata = fs.readFileSync('./databases/card.json');
    let card = JSON.parse(rawdata);
    res.json(card[username]);
})