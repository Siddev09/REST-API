require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./controllers/db/connect')

const PORT =  5000;
const products_routes = require("./routes/products")

app.get('/' , (req, res) => {
    res.send('Hi , im siddharth')

});


//middleware

app.use("/api/products", products_routes);



const start = async () =>{
    try{
        await connectDB(process.env.MONGODB_URI);
        app.listen(PORT ,() => {
            console.log(`${PORT} CONNECTED TO BACKEND...`);
        });
    }
    catch(err){
        console.log(err)
    }
};

start();