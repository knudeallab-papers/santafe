const express = require('express')
const route = require('./routes/index')
const mongoose = require('mongoose')

const app = express()
const port = 5000
const mongoURI = 'mongodb://SPAdbtrax:deallab522@127.0.0.1:27017/SPAdb'

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))

app.use('/api', route);

app.listen(port, () => {
    console.log(`Port ${port} is listening...`);
})