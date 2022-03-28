const express = require('express')
const dotenv = require('dotenv')
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/Cafe"

const app = express()
dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8000

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World")
})

//Routes
app.use('/items', require('./routes/item.route'));
app.use('/users', require('./routes/user.route'));

//mongo connection
mongoose.connect(url, {useNewUrlParser: true})
const conn = mongoose.connection
conn.on('open', () => {
    console.log('Database Connected..')
})
mongoose.Promise = global.Promise;  

//calling server
app.listen(5000, () => {
    console.log("Server is listening on port 5000")
})