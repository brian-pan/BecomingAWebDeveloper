const express = require('express');
const app = express();

//parse the request body as URL-encoded data
// (tell express how to parse it, o/w it will be undefined)
app.use(express.urlencoded({ extended: true }))
//parsing json data into request body
app.use(express.json())

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