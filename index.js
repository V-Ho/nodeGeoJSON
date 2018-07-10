const express = require('express')
const routes = require('./routes/api')
const bodyParser = require('body-parser')

const app = express()

// use bodyParser before all other middleware
app.use(bodyParser.json())

app.use('/api', routes)

app.get('/', (req, res) => {
  console.log('GET request')
  res.send({ name: 'VHo' })
})

app.listen(process.env.port || 4000, function () {
  console.log('now listening on port 4000')
})
