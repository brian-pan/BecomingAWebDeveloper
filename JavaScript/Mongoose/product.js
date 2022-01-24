const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true }) //movieApp is a database of Mongo
    .then(() => {
        console.log('Connection Open');
    })
    .catch(err => {
        console.log('Error');
        console.log(err);
    })

const productSchema = new mongoose.Schema({
    name: { //can add addition info using this format
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive'] //2nd arg: error msg
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String],
        default: ['Cycling']
    },
    qty: { //qty itself doesn't need a type
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
})

// productSchema.method.greet = function() { 
//     console.log("Hello");
//     console.log(`- from ${this.name}`);
// }

productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function(newCate) {
    this.categories.push(newCate);
    return this.save();
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'Mountain Bike'});
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
}

// const bike = new Product({
//     name: 'Tire Pump',
//     price: 19.50,
//     categories: ['Cycling']
// })

// bike.save()
//     .then(data => {
//         console.log("IT WORKED");
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO");
//         console.log(err);
//     })

// Product.findOneAndUpdate({name: 'Tire Pump'}, {price: 1.99}, {new: true, runValidators: true}) //{new: true}: shows the new data if updated. {runValidators: true}: still apply validations of schema when updating.
//     .then(data => {
//         console.log("IT WORKED");
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO");
//         console.log(err);
//     })