const express = require('express')
const router = express.Router()
const port = process.env.PORT
const posts = require('../data/posts.js')

/* router.get('/', (req, res) => {
    res.json(posts)
}) */

router.get('/', (req, res) => {
    let filter = posts;
    if (req.query.titolo) {
        filter = posts.filter(
            post => post.titolo.toLowerCase().includes(req.query.titolo)
        )
    }
    res.json(filter)
})

router.delete('/', (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.findIndex( post => post.titolo.toLowerCase().includes(req.query.titolo.toLowerCase()))
  

    posts.splice(post, 1);
    console.log(posts)
    res.status(204)
    res.end()
})


module.exports = router