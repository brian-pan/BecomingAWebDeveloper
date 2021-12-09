const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log('We got a new request.');
//     res.send('<h1>This is my Webpage!</h1>')
// })

// root route:
app.get('/', (req, res) => {
    res.send('This is the home page!')
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    // console.log(req.params);
    res.send(`<h1>Browsing the ${subreddit} subreddit...`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const {subreddit, postId} = req.params;
    // console.log(req.params);
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit...`)
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!')
})

app.post('/cats', (req, res) => {
    res.send('Post request to /cats')
})

app.get('*', (req, res) => {
    res.send(`I don't know that path.`)
})

app.listen(8080, () => {
    console.log('Listen on port 8080:');
})