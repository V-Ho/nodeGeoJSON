const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log('GET request')
  res.send({ name: 'VHo' })
})

app.listen(process.env.port || 4000, function () {
  console.log('now listening on port 4000')
})
