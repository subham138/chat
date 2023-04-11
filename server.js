const express = require('express'),
    session = require('express-session'),
    cors = require('cors'),
    port = process.env.PORT | 3000,
    app = express(),
    path = require('path');

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/assets'));
app.set('view engine', 'ejs');

// SET SESSION
app.use(session({
    secret: 'Live chat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 3600000
    }
}));

app.get('/', (req, res) => {
    res.send('welcome')
})

app.listen(port, (err) => {
    if (err) console.log(err);
    else console.log(`App is running at port ${port}`);
})