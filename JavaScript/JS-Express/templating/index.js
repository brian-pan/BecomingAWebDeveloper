const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// before we use:
// app.get('/', (req, res) => {
//     res.send('HI');
// })
// Now change to:
app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num: num }) //random === random.ejs
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit.ejs', { subreddit })
})

app.listen(3000, () => {
    console.log('Listening on port 3000:');
})