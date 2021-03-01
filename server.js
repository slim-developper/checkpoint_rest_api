const express = require('express');
require('dotenv').config({path: __dirname +`/config/.env`})
const dbconnect =require('./database/dbconnect')


const app = express();
app.use(express.json());

app.use('/api/user', require('./router/router'));


//connection to database

dbconnect();


app.listen(process.env.PORT, (err) => {
    err? console.log('problem on the server') : console.log('we are connetected' )
})