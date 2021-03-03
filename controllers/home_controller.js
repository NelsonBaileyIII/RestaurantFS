var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var path = require('path');
var HomeRoutes = express.Router();

var correct_path = path.join(__dirname+'/../views/home/');
// classic get route adds in extra fluff to be able to show the email in the home page. 
HomeRoutes.get('/',function(req,res){

    var menu =
    [{name:'Sailor Moon Parfait',price:'500'},
              {name:'Kon Dome Cake',price:'1500'},
            {name:'Totoro Tarts',price:'200'},
            {name:'Dragon Ball Cake Pops', price:'450'},
            {name:'Pokeball Macarons',price:'1000'}];                                         
    let email = req.session.email;
    res.render('home/index',{
        user_email: email, 
        menu:menu
    

    
    });
});

HomeRoutes.post('/order', (req,res) => {
    db.orders.create({
        firstName: req.body.firstName, 
        lastName: req.body.lastName, 
        email: req.body.email,
        gender: req.body.gender
      }).then(function(user){
          console.log(user);
          res.send(user);
      });
    })



// makes this route accesible in the server.js 
module.exports = {"HomeRoutes" : HomeRoutes};