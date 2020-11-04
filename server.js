const express = require('express');
const db = require('./database');
let app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/db', function (req, res) {
    db.save(req.body)
    res.status(201).send("Data Sent")
});
  
  app.get('/db', function (req, res) {
    db.find((err, data) => {
      if (err) {
        res.end();
      } else {
        res.send(data).end();
      }
  })
  })

app.listen(3000,()=>{console.log("Server is running")});