const express = require('express')
const router = express.Router()
const port = process.env.PORT
const posts = require('../data/posts.js')

router.get('/', (req, res) => {
    res.json(posts)
})

router.get('/:id', (req, res) => {
    res.json(posts[parseInt(req.params.id)])
})

router.delete('/:id', (req, res) => {
    res.send('cancellazione del post ' + req.params.id)
})


module.exports = router