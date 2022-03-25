const express = require('express');
const app = express();
const User = require('./models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost:27017/authDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection Open');
    })
    .catch(err => {
        console.log('Error');
        console.log(err);
    })

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));

//routes:
app.get('/', (req, res) => {
    res.send('This is the home page.')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username, 
        password: hash
    })
    await user.save();
    res.redirect('/')
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/secret', (req, res) => {
    res.send('This is secret!')
})

//listen:
app.listen(3000, () => {
    console.log('App serving on port 3000:');
})