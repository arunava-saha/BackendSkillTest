const express = require('express');

require('dotenv').config();
const app = express();
const connectdb = require('./config/mongoose');
const port = process.env.PORT || 8000;
const path = require('path');

connectdb();
const layouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, 'assets')));


app.use(layouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
;

app.use("/", require('./routes/home'))


app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});