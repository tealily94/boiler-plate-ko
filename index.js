const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ksr9405:dmstjqry94@boilerplate.qk8am.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! This is my 3rd attept')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

