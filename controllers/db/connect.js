const mongoose = require('mongoose');




const connect = (uri) => {
    console.log('connected... boi')
    return mongoose.connect(uri)

}


module.exports = connect;