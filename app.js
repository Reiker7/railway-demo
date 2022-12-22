const landing = require('./routes/landing')
const Landing = require('./models/landing')
const Nea = require('./models/nea')
const nea = require('./routes/nea')
const user = require('./routes/user')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const router = express.Router()
require('dotenv').config()

require('./db')()

app.use(express.json())

app.use('/api/astronomy/landings', landing)
app.use('/api/astronomy/neas', nea)
app.use('/api/users', user)
app.get('/landing', async (req, res) => {
    if (req) {
           const result = await Landing.find({  })
               
           res.send(result)
       } 
   })
app.get('/neas', async (req, res) => {
    if (req) {
           const result = await Nea.find({  })
               
           res.send(result)
       } 
   })

app.get('/ping', (req, res) => {
    res.send('pong')
})

const port = process.env.PORT || 3000
app.listen(3000, () => {
    console.log(`http://localhost:${port}`);
})
