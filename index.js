const express = require('express');
const app =express();
const mongooes= require('mongoose')
const userRouter= require('./userRouter');


app.use(express.json());

app.use('/api',userRouter);


app.listen(5000,()=>{
    console.log("locall host connected successfully")
});
 
mongooes.set('strictQuery', true);
mongooes.connect('mongodb+srv://tamil:9585157515@cluster0.ypnxadj.mongodb.net/?retryWrites=true&w=majority',()=>{
    console.log("server connect successfully")
})

