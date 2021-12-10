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

app.listen(3000, () => {
    console.log('Listening on port 3000:');
})