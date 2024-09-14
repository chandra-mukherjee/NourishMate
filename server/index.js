
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


app.use('/', healthDetailRouter);

app.use('/', userRouter);

app.use('/', dietRouter);   

app.get('/', (req, res) => {
    res.send("Hello to API");
}); 



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

mongoose.set('useFindAndModify', false); 
