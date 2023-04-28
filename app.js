const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

const mongoose = require('mongoose')
const URL = "mongodb+srv://phongpkt:rDDra8qqSuEH2khW@cluster0.jxojykg.mongodb.net/test";

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

//connect to Db
mongoose
    .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((error) => {
        console.log("error", error);
    })

const home = require('./routes/home.router');
app.use('/', home)

app.listen(port, () => {
    console.log('localhost:' + port);
})