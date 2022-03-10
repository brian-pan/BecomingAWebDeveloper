const express = require('express');
const app = express();
const morgan = require('morgan');
const { measureMemory } = require('vm');
const AppError = require('./AppError')
//app.use(morgan('dev')) //tell express on every single request use the middleware called morgan

// app.use((req, res, next) => {
//     console.log('First middleware');
//     next(); 
//     console.log('First middleware - after calling next()');// if return next(), will not see this msg
// })
// app.use((req, res, next) => {
//     console.log('Second middleware');
//     return next();
// })
// app.use((req, res, next) => {
//     console.log('Third middleware');
//     return next();
// })

const verifyPassword = (req, res, next) => {
    const {password} = req.query;
    if (password === 'chickennugget') {
        next();
    }
    throw new AppError('Password Required', 401)
}



app.use(morgan('tiny'));
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method.toUpperCase(), req.path);
    next();
})

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('home page') //res.send will stop running code
})

app.use('/dogs', (req, res, next) => {
    console.log('I love dogs. Not really.');
    next();
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('woof')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('My secret is: ...')
})

app.use((req,res) => {
    res.status(404).send('Not Found!')
})

app.use((err, req, res, next) => {
    const {status = 500} = err;
    const {message = 'Something Went Wrong.'} = err;
    res.status(status).send(message);
})


app.listen(3000, () => {
    console.log('App is running on localhost:3000');
})