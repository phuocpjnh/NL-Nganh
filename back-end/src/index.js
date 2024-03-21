const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send('Hello con c')
})
console.log('process.env.MONGO_DB', process.env.MONGO_DB)
mongoose.connect(`mongodb+srv://abdulsalam17:${process.env.MONGO_DB}@cluster0.o9ibzxb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
         console.log('Connect Db success!')
    })
    .catch((err) => {
         console.log(err)   
    })


.catch((err) => {
    console.log(err)
})

app.listen(port, () => {
    console.log('Server is running in port: ', + port)
})