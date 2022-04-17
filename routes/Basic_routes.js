/*  This is a basic file for creating routes 
*   All the routes of views folder are created here
*/

/*  make a constant variable --> express
*   and import external express module using 'require' function 
*/
const express = require('express');

/*  Store express() module in app variable and use it.
*/
const app = express();

/*  Making path variable and import path module 
*   for joinning multiple segments  
*/
const path = require('path');

/* iport fs module*/
const fs = require('fs');
const req = require('express/lib/request');
const { userInfo } = require('os');

/*  
*   import router module of express and store it in router variable
*/
const router = express.Router();

/*  The app.get() function routes the HTTP GET Requests to the path 
*   which is being specified with the callback function 
*/
//  This get function make route for index file
// when we type https://localhost/ we can index file response 
router.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'../views/index.html'));
});

//  This get function create route for home file.
// when we type https://localhost/home we can home file response
router.get('/home', function(req, res){
   res.sendFile(path.join(__dirname,'../views/Home.html'));
});


//  This get function create route for About file
// when we type https://localhost/about we can About file response
router.get('/about', function(req, res){
    res.sendFile(path.join(__dirname,'../views/about.html'));
});

// assignment question 3
/*  The router.get() function routes the HTTP GET Requests to the path 
*   which is being specified with the callback function 
*/
//  This get function make route for index file
// when we type https://localhost/ we can index file response 
// render function used to show ejs file output

var text = {
    name : "Krishan",
    tools : ['HTML','CSS','Javascript','Mongodb','expressJS','Nodejs','PhP','SQL']
}

router.get('/ejs', function(req, res){
    res.render('pages/main',{text:text});
});


/*  Print error message on wrong routing
*   or the path which does not exsits
*/
router.get('*', function(req, res){
    res.sendFile(path.join(__dirname,'../views/error.html'));
});

module.exports = router;