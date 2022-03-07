const express = require('express');
const { read } = require('fs');
const app = express(); //result of excuting express
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {    useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo Connection Open');
    })
    .catch(err => {
        console.log('Mongo Connection Error');
        console.log(err);
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.get('/products', async (req, res) => {
    const products = await Product.find({}) //{} means everything
    res.render('products/index', {products})
})

app.get('/products/:id', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/show', {product})
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000...")
})