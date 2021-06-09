var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.use(express.static('public'));

app.get('/tlush/:id/:pop/:year/:month', function (req, res) {
   const id = req.params.id
   const pop = req.params.pop
   const year = req.params.year
   const month = req.params.month
   res.sendFile( __dirname + "/tlushim/" + id + "_" + pop + "_" + year + "_" + month + ".xml" );
})

app.get('/glufa/:pop/:year', function (req, res) {
    const pop = req.params.pop
    const year = req.params.year
    res.sendFile( __dirname + "/glufot/" + pop + "_" + year + ".png" );
 })

 app.get('/style/:pop/:year', function (req, res) {
    const pop = req.params.pop
    const year = req.params.year
    res.sendFile( __dirname + "/styles/" + pop + "_" + year + ".xsl" );
 })

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})