# **REST - Representational State Transfer** 

## *This is an important aspect of a Client-Server model, which uses the HTTP protocol to perform necessary CRUD operations that allow for a functional user experience.*

In this repository, I have created a simple REST server using Node.js and the Express framework. The REST Api is designed to respond to "get requests, post requests, put requests, and delete requests." 

These are the foundational components that are required to have a server that can effectively communicate. 

Here is an example of how a server can be setup (without using Express) using http in Javascript: 
 ```ssh
const http = require('http'); 

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Test response'); 
        res.end(); 
    } 
}) 

server.listen(3000); 

console.log('Listening on port 3000'); 
```

I began by creating an empty directory, and ran the following command to create a package.json file: 
 ```ssh
 npm init --yes 
 ```
