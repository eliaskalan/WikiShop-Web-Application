const express = require('express')
const path = require('path')
const app = express()
const port = 8080
const session = require('express-session');


app.listen(port)
const fs = require('fs');
const { Session } = require('inspector')
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
app.get('/cart',function(req, res){

    var options = {
        root

    }
    console.log(req.query)
    const username=req.query.username;
    const sessionId = req.query.sessionId;
    // TODO validation of user
    //TODO if user exist return cart 
    res.sendFile('cart.html', options, function(err){
        console.log(err)
    })
    
})
app.get('/card/:username/:sessionId', (req, res) => {
    const username = req.params.username
    const sessionId = req.params.sessionId
    let datalogin = JSON.parse(fs.readFileSync('./databases/users.json'));
    const user=datalogin[username]
    let rawdata = fs.readFileSync('./databases/card.json');
    let card = JSON.parse(rawdata);
    if(user.number==sessionId){
        res.json(card[username]);
    }
    
})


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// TODO UUID 
app.post("/auth", function(req,res){
    let username = req.body.username;
    let password = req.body.password;
    let rawdata = fs.readFileSync('./databases/users.json');
    let users = JSON.parse(rawdata);
    var obj = {
        table: []
     };
     
    if(username && password)
    {   
        
        
        if(typeof(users[username])!="undefined" && users[username].password==password)
        {
            
            const { v4: uuidv4 } = require('uuid');
            console.log(username,password,users[username].password);
            req.session.loggedin = true;
            req.session.username = username;
            req.session.uuid=uuidv4();
            //TODO write to json file the seassion token and username
            users[username].number=req.session.uuid;
            fs.writeFileSync('./databases/users.json',JSON.stringify(users));
            return res.json({
                token: req.session.uuid,
                username: username,
                message: 'Successfully login'
            });
            
        } else {
           return res.status(401).send({
                message: '401 Unauthorized'
             });
        }
    }
    else {
		return res.status(401).send({
            message: '401 Unauthorized'
         });
	}
})


