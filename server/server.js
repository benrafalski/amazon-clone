const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51JIbRbCeYChu5FtFnHRRu5AMFleCNJEp08fUvGQYbxgQTm8D9kCXYaPZj1TXyTMOwyhEuTBtzFWHKikcOnXcYKj4003g9Dfe0j')
const Users = require('./models/User.js')
const Orders = require('./models/Order.js')

const app = express()
const port = process.env.PORT || 8000

app.use(express.json()) // body parser for json
app.use(cors({ origin: true }))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Methods', 'PUT', 'POST')
    next()
})

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
    Users.find((err, data) => {
        err 
            ? res.status(500).send(err)
            : res.status(200).send(data)
    })
})

app.post('/users', (req, res) => {
    const dbUser = req.body;

    Users.create(dbUser, (err, data) => {
        err
            ? res.status(500).send(err)
            : res.status(201).send(data)
    })
})

app.get('/orders', (req, res) => {
    Orders.find((err, data) => {
        err 
            ? res.status(500).send(err)
            : res.status(200).send(data)
    })
})

app.post('/orders', (req, res) => {
    const dbOrder = req.body;
    console.log(req.body)

    Orders.create(dbOrder, (err, data) => {
        err
            ? res.status(500).send(err)
            : res.status(201).send(data)
    })
})

app.post('/payments/create', async (req, res) => {
    const total = req.body.total
    console.log('Payment Request Recieved', total)

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total ? total : 0.50 * 100, // in cents***
            currency: 'usd'
        })
        res.status(201).send({
            clientSecret: paymentIntent.client_secret
        })
    } catch(e) {
        return res.status(500).send({
            error: {
                message: e.message
            }
        })
    }
})

app.listen(port, () => {
    console.log(`listening on localhost ${port}`)
})