const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
uuidv4();
const methodOverride = require('method-override')

//parse the request body as URL-encoded data
// (tell express how to parse it, o/w it will be undefined)
app.use(express.urlencoded({ extended: true }))
//parsing json data into request body
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


//fake some data, since we don't have database yet:
let comments = [
    {
        id: uuidv4(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuidv4(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuidv4(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuidv4(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

//get comments (READ - Index):
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

//Reason need 2 routes is that our form needs to submit somewhere and it will send by post request. And the GET route just to give you the form itself.
//form to create new comments (part 1) (CREATE - New):
app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})
//create comments (part 2, post) (CREATE - Create):
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuidv4() }) //add data to database
    // res.send('IT WORKS');
    //After submit, needs to redirect user to another page:
    res.redirect('/comments');
})

//get details for one specific comment (READ - Show)
app.get('/comments/:id', (req, res) => {
    // let id = req.params.id
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment:comment })
})

//before edit comment, need a form to edit: (UPDATE - Edit)
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment })
})
//partically updating the comment (UPDATE - Update)
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params; //take that id being modified
    const currComment = comments.find(c => c.id === id); //find the comment currently have
    const newComment = req.body.comment; //define a new comment
    currComment.comment = newComment; //update the comment text
    res.redirect('/comments');
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