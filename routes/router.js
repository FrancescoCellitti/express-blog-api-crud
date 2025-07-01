const express = require('express')
const router = express.Router()
const port = process.env.PORT
const posts = require('../data/posts.js')

/* router.get('/', (req, res) => {
    res.json(posts)
}) */

router.get('/', (req, res) => {
    let filter = posts;
    if(req.query.titolo){
        filter = posts.filter(
            post => post.titolo.toLowerCase().includes(req.query.titolo)
        )
    }
    res.json(filter)
})

router.delete('/:id', (req, res) => {
    res.send('cancellazione del post ' + req.params.id)
})


module.exports = router