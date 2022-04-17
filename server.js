/*  
*   This file is used for making server side configurations using express framework
*   This file is the base or main file to run node server     
*/
// Main sever.js file for node configurations

/*  make a constant variable --> express
*   and import external express module using 'require' function 
*/
const express = require('express');

/*  import morgan module for start npm server 
*   Using morgan ypou can edit your code files without 
*   need to restart the server
*/
const morgan = require('morgan');

/*  Making path variable and import path module 
*   for joinning multiple segments  
*/
const path = require('path');

/*  Store express() module in app variable and use it with
*   morgan to start the server
*/
const app = express().use(morgan("dev"));

/*  router/Basic_routes.js 
*   Import router folder Basic_router.js file in main server.js file
*   The Basic_routes.js is reponsible for routes of the response view as output
*   Store routes file in route variable
*/
const router = require('./routes/Basic_routes');

/*  Set EJS as view engine 
*   It allows to show dynamically send data
*   from client side and shows final HTML output
*/  // Assignment question 3 
app.set('view engine', 'ejs');

/*
* making port variable 
* port set at ---> 3000
* use constant so that no one can change port inbetween 
*/
const port = 3000;

/* 
*   app.use() function is used to set middleware for your application
*   express.static() is a built in middleware function used for static file
*   path.join() functions use to join specific path segments into one path
*/
// Adding Bootstrap css
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
// Adding Bootstrap js
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
// Adding Jquery
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
// adding custom css of style folder
app.use('/c_css',express.static(path.join(__dirname,'style')));
/*
*   Set route file middleware to use in application.
*   Now when we type http://localhost:3000/ in bowser it get response
*   from Basic_router.js file and shows corresponding output. 
*/ // assignment question 2 
app.use('/', router);

/* 
*   app,listen() is used to bind or listen the connections
*   on specific port in this case it is at port -> 3000
*   if any error comes at starting the server it will print error 
*   message on terminal. 
*   else server is start at -> http://localhost:3000
*   and print the message at terminal
*/
app.listen(port, (err) => {
    if(err) 
    {
        console,log("Error in server setup");
    }
    console.log(`App Listening on port -> ${port}`);
});