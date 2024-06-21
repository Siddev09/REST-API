require('dotenv').config();
const connectDB = require('./controllers/db/connect');
const product = require('./models/product');
const prodJson = require('./products.json') 

const start = async () => {
    try{
       
        await connectDB(process.env.MONGODB_URI);
        await product.deleteMany();
        await product.create(prodJson)
        console.log('running');
    }catch(err){
        console.log(err)
    }
}

start();