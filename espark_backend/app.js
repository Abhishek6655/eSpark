const express = require('express');
const mongoose = require('mongoose');
const morgan =require('morgan');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const expressValidator =require('express-validator');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const braintreeRoutes = require('./routes/braintree');
const orderRoutes = require('./routes/order');

const cors =require('cors');

const app = express();


mongoose.connect(
    process.env.DATABASE,
    {useNewUrlParser : true,
        useCreateIndex: true,
        useUnifiedTopology: true }
).then(() => console.log('DB Connected'));

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

mongoose.connection.on('error',err =>{
    console.log('Db connection error : ${err.message}')
});

app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);
app.use("/api",braintreeRoutes);
app.use("/api",orderRoutes);
app.get('/',(req,res)=>{
    res.send("hello from node")
})
const port = process.env.port || 8000

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('espark_frontend/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'espark_frontend', 'build', 'index.html'));
    });
     
}


app.listen(port,()=>{
    console.log('server is running')
})