const express = require('express'); 
//"express()" returns a function of time. By convention, we call this function "app"
const app = express(); 

//Create endpoints that respond to the HTTP get request via the following callback function: 
app.get('/', (req, res) => { 
//The first argument we pass is the url, which is "/" by default. We are setting up an HTTP get request to this endpoint. 
//The second argument contains the request (req) and response (res) argument. This allows us to deal with incoming information. 
//This is how we define a route. You specify the path or the url '/', and the callback function, which is also called the "Route handler."
res.send('Hello World'); 
}); 

//We need to listen on a given port. 
//Optionally, a function can be run when the application starts listening on the given port. 
app.listen(3000, () => console.log('Listening on port 3000')); 