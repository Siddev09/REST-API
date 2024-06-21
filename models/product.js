const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is necessary'],
    },
    price: {
        type: Number,
        required: [true, 'price is required']
    },
    featured: {
        type: Boolean,
        default: false,

    },
    rating: {
        type: Number,
        default: [4.9, 'rating is required']
    },

    createdAt: {
        type : Date,
        default:Date.now(),
    },
    company:{
        type: String,
        enum: {
            values: ['apple' , 'samsung' , 'dell' , 'mi'],
            message : `{values} is not correct`,
        },
    } 
});

module.exports = mongoose.model('Product' , productSchema);