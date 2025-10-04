const express = require('express'); 

const app = express(); 

app.get('/', (req, res) => { 
res.send('Hello Docker + CI/CD!'); 
}); 

module.exports = app;