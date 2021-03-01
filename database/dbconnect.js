const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + `../config/.env` })

//connect to database
const dbConnect = () => {
    mongoose.connect(process.env.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, })
        .then(() => console.log('db connected'))
        .catch((Error) => console.log(Error))

}
module.exports = dbConnect;