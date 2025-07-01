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

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find(post=> post.id === id)
    console.log(posts)

    if(!post){
        res.status(204);
        return res.json()
    }

    posts.splice(posts.indexOf(post), 1);
})


module.exports = router