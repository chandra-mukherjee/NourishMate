/* 
    body-parser: enable send requests
    cors: enable cors orgin requests
    express: routing epxress framework
    mongoose: creating models / connect mongoDB
    nodemon: auto reset
*/
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// import routers
import healthDetailRouter from './routes/healthDetail.js';
import userRouter from './routes/user.js';
import dietRouter from './routes/diet.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// HD Router
app.use('/', healthDetailRouter);
// user Router
app.use('/', userRouter);
// diet Router
app.use('/', dietRouter);   // localhost:5000/diet/diet

app.get('/', (req, res) => {
    res.send("Hello to API");
}); 

// connect to mongoDB 
// const CONNECTION_URL = 'mongodb+srv://Liam:Liam1809@cluster0.ifm61.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    ()=>{
        console.log("Mongodb Connected") 
    }
).catch(
    (error)=>
        {
            console.log("Connection Failed to database:",error.message)
        } 
       );

app.listen(5000,()=>{
    console.log("Server is running on port: 5000")
})

mongoose.set('useFindAndModify', false); //  no warnings in the console
