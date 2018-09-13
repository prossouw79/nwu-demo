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
        dogs: []
    }
    var dog1 = {
        name: "Zoey",
        breed: "Something..."
    }

    var dog2 = {
        name: "Kolisi",
        breed: "Dachshund"
    }

    person.dogs.push(dog1);
    person.dogs.push(dog2);

    var person2 = {
        name: "Henry",
        surname: "Foulds",
        age: 21,
        dogs: []
    }
    var dog3 = {
        name: "Kai",
        breed: "Alaskan Malamut"
    }

    person2.dogs.push(dog3);

    res.send(JSON.stringify([person,person2]));
})

app.listen(3000)