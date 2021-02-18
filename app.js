const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const mongoConnect = require('./util/database').mongoConnect;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routes = require('./routes/routes');
const dbUrl = 'mongodb://127.0.0.1:27017/auth-app';

// app.use((req, res, next) => {
//     console.log(req.body);
// });
app.use(routes);

mongoose.connect(dbUrl)
.then((result)=>{
    console.log('connected');
    app.listen(3000);
})
.catch((err)=>{
    console.log(err);
});