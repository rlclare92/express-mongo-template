const hbs= require('express-handlebars');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userSchema = require('./models/user')


require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@usersignup-y0pbu.mongodb.net/userdb?retryWrites=true&w=majority`), {
    useNewUrlParser: true,
    useUnifiedTopology: true 
};

const app = express();
const websiteStoreData = require('./lib/websiteStoreData');


app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bpdyParser.join());

// app.use(express.static(path.join(__dirname,'public')));

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}))

app.set('view engine', '.hbs');

app.get('./', (req,res) => {
    res.render('index');
});

const user = new UserSchema({
    username: 'your name',
    email: 'yourName@mail.com',
    password:'mySuperSecretPassword',
});

user.save();

UserSchema.find({}, (err, docs) => {
    console.log(docs);
})

app.listen(3001, () => {
    console.log('sever listening  on part 3001');    
})