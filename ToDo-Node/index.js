var express = require('express')
var app = express();

app.use(express.static(__dirname + '/client'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.get('/api/getPerson', function (req, res) {

    var person = {
        name: "Pieter",
        surname: "Rossouw",
        age: 27,
        dogs : []
    }
var dog1 = {
        name: "Zoey",
        breed: "Something..."
    }

    person.dogs.push(dog1);

  res.send(JSON.stringify(person));
})

app.listen(3000)