const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 8000

const connectionURL = 'mongodb://localhost/amazon-clone'
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
let db = mongoose.connection

// check db connection
db.once('open', () => {
    console.log(`connected to ${connectionURL}`)
})

// check for db errors
db.on('error', () => {
    console.log(err)
})

app.get('/', (req, res) => {
    res.status(200).send('amazon-clone')
})

app.get('/users', (req, res) => {
    
})

app.listen(port, () => {
    console.log(`listening on localhost ${port}`)
})