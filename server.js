const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const nodemailer = require('nodemailer');


/*let poolConfig = {
    host: 'smtp.mail.yahoo.com',
    port: '465',
    secure: false,
    auth: {
        user: 'ehelbig1@yahoo.com',
        pass: 'ElBandido21@%'
    },
    requreTLS: false
};

let transporter = nodemailer.createTransport(poolConfig);

let mailOptions = {
    from: 'me',
    to: 'ehelbig1@yahoo.com',
    subject: 'test',
    text: 'test',
    html: '<h1>Test</h1>'
};

transporter.sendMail(mailOptions, (err, info) => {
    if(err){
        console.log(err);
    }
    console.log('Message sent')
})*/

//Connect to database
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});

//If database connection error
mongoose.connection.on('error', (err) => {
    console.log('Database error ' + err);
});

const app = express();

const users = require('./routes/users');

const port = process.env.PORT || 8080;

// Cors middleware
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users)

// index route
app.get('/', (req, res) => {
    res.send('Invalid endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
    console.log('Server started on port ' + port);
});