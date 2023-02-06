const express = require('express');
const app = express();
const Pig = require('pigcolor');
var QRCode = require('qrcode');
var qrcode = require('qrcode-terminal');

app.get('/', (req, res) => {
    qrcode.generate('https://goby.in/thedottech');
});


app.listen(8080, () => {
    Pig.server(8080);
});