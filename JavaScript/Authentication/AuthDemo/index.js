const express = require('express');
const app = express();
const User = require('./models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

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
app.use(session({ secret: 'notagoodsecret' }))

//middleware functions:
const checkLoginStats = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login');
    }
    next();
}

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
        hashedPassword: hash
    })
    await user.save();
    res.redirect('/login')
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', async(req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({username})
    const isValidUser = await bcrypt.compare(password, user.hashedPassword);
    if(isValidUser) {
        req.session.user_id = user._id; //if you successfully log in, we'll store your user ID in the session.
        res.redirect('/secret')
    } else {
        res.redirect('/login')
    }
})

app.post('/logout', (req, res) => {
    req.session.user_id = null;
    // req.session.destroy(); //delete all info
    res.redirect('/login')
})

app.get('/secret', (req, res) => {
    if(!req.session.user_id){
        return res.redirect('/login')
    }
    res.render('secret')
})

//listen:
app.listen(3000, () => {
    console.log('App serving on port 3000:');
})