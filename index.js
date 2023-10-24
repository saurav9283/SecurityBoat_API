import express from 'express'
import cors from 'cors';
import mongoose from 'mongoose'
import bodyParser from "body-parser"
import cookieParser from "cookie-parser";
import productRouter from './router/product.js'
import authRoutes from './router/authRoutes.js';


const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(bodyParser.json())
app.use(cors());
app.get('/', (req, res) => {
    res.send('Api is working!!');
})

app.use('/auth' , authRoutes)
app.use('/product', productRouter)

try {
    mongoose.connect('mongodb+srv://saurav:saurav@cluster0.aywc9ut.mongodb.net/?retryWrites=true&w=majority');
    console.log("Connected to MongoDb")
} catch (error) {
    console.log(error)
    throw error
}

app.listen(5000, () => {
    console.log('server is Working!! 5000');
})
