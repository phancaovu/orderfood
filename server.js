
const express = require('express');
const app = express();

const connectDB = require('./app/config/database');
const morgan       = require('morgan')
const food = require("./app/routers/food");
const cart = require("./app/routers/cart");
const user = require("./app/routers/user");


var bodyParser = require("body-parser");
app.use(morgan('dev'));
const PORT = process.env.PORT || 8000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/' , (req , res)=> {
   res.send('hello from simple server :)')
});

// Call connect database
connectDB();


app.use("/api", food);
app.use("/api", cart);
app.use("/api", user);


app.listen(PORT, () => {
    console.log(`Listening at: http://localhost:${PORT}`);
})

