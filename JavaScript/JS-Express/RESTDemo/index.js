const express = require('express');
const app = express();
const path = require('path');

//parse the request body as URL-encoded data
// (tell express how to parse it, o/w it will be undefined)
app.use(express.urlencoded({ extended: true }))
//parsing json data into request body
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//fake some data, since we don't have database yet:
let comments = [
    {
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

//get comments:
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/tacos', (req, res) => {
    res.send('Get response of /tacos')
})

//Defining express post routes:
app.post('/tacos', (req, res) => {
    // console.log(req.body);

    //destructure from req.body
    const { meatType, qty } = req.body;
    res.send(`You ordered ${qty} ${meatType} tacos successfully.`)
})

app.listen(3000, () => {
    console.log('On port 3000');
})