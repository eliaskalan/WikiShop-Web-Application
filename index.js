const express = require('express')
const path = require('path')
const app = express()
const port = 8080


app.listen(port)

/* 
    Serve static content from directory "public",
    it will be accessible under path /, 
    e.g. http://localhost:8080/index.html
*/
app.use(express.static('public'))

// parse url-encoded content from body
app.use(express.urlencoded({ extended: false }))

// parse application/json content from body
app.use(express.json())

// serve index.html as content root
app.get('/', function(req, res){

    var options = {
        root: path.join(__dirname, 'public'),

    }

    res.sendFile('index.html', options, function(err){
        console.log(err)
    })

})

app.get('/categories', function(req, res){

    var options = {
        root: path.join(__dirname, 'public'),

    }

    res.sendFile('product-categories.html', options, function(err){
        console.log(err)
    })
    
})

app.get('/categories/:id', function(req, res){
    const id=req.params.id
    var options = {
        root: path.join(__dirname, 'public'),
        id: id

    }
    res.sendFile('categories/category.html', options, function(err){
        console.log(err)
    })
    
})

app.get('/about-us', function(req, res){

    var options = {
        root: path.join(__dirname, 'public'),

    }

    res.sendFile('about-us.html', options, function(err){
        console.log(err)
    })
    
})

app.get('/contactus', function(req, res){

    var options = {
        root: path.join(__dirname, 'public'),

    }

    res.sendFile('contactus.html', options, function(err){
        console.log(err)
    })
    
})
