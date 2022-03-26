const express = require('express');
const app = express();
const User = require('./models/User');
const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
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
    // const hash = await bcrypt.hash(password, 12);
    const user = new User({ username, password: password });
    await user.save();
    res.redirect('/login')
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', async(req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
        req.session.user_id = foundUser._id; //if you successfully log in, we'll store your user ID in the session.
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

//set up first end point:
app.get('/secret', checkLoginStats, (req, res) => {
    res.render('secret')
})
//set up another end point:
app.get('/secret2', checkLoginStats, (req, res) => {
    res.send('SECOND SECRET HELLO HELLO')
})

//listen:
app.listen(3000, () => {
    console.log('App serving on port 3000:');
})