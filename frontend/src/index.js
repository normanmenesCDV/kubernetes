const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/static'));

app.listen(5000, function () {
    console.log('Aplikacja została uruchomiona');
});
