var express = require("express");
var app = express();
app.get('/', (req, res) => {
    console.log('cheguei');
});
app.listen(3000, () => { return console.log('App is running, my king'); });
