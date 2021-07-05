  
const express = require('express');
const dotenv = require('dotenv');

const bodyparser = require("body-parser");
const path = require('path');

const connectDB = require('./server/db/dbb');

const app = express();

dotenv.config( { path : '1.env'} )
const PORT = process.env.PORT || 8080



// mongodb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "front/css")))

app.use('/js', express.static(path.resolve(__dirname, "front/js")))

// load routers
app.use('/', require('./server/routes/routess'))

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});