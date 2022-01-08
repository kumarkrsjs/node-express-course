const express = require('express'),
users = require('./routes/users'),
login = require('./routes/login');

const app = express();
app.use('/users', users);
app.use('/login', login);

app.listen(8000, function(){
    console.log("server is running")
})