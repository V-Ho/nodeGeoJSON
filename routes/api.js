const express = require('express')
const router = express.Router() // mount req methods on router object

router.get('/users', (req, res) => {
  res.send({ type: 'GET' })
})

router.post('/users', (req, res) => {
  console.log(req.body)
  res.send({
    type: 'POST',
    name: req.body.name,
    userType: req.body.type
  })
})

router.put('/users/:id', (req, res) => {
  res.send({ type: 'PUT' })
})

router.delete('/users/:id', (req, res) => {
  res.send({ type: 'DELETE' })
})

module.exports = router
