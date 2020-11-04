const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000,()=>{console.log("Server is running")});