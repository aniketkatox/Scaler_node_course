const express = require('express')
const categories = require('./Routes/categories')
const students = require('./Routes/students')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/learningPlatform')
.then(()=> console.log('Connection is Successful to database'))
.catch(err=> console.error('Could not connect to mongodb',err))

app.use(express.json())
app.use('/api/categories',categories)
app.use('/api/students',students)





const port = process.env.PORT || 3000
app.listen(port , ()=> console.log(`Listening on port ${port}...`))