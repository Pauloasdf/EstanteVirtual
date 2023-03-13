const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000
const openLibraryRoute = require('./routes/openLibrary.route.js')
app.use(express.json())
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        preflightContinue: false
    })
)

app.use('/ol', openLibraryRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})