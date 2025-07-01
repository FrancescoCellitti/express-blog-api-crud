const express = require('express')
const router = express.Router()
const port = process.env.PORT
const posts = require('../data/posts.js')

/* router.get('/', (req, res) => {
    res.json(posts)
}) */

router.get('/', (req, res) => {
    let filter = posts;
    if (req.query.tags) {
        filter = posts.filter(
            post => post.tags.includes(req.query.tags)
        )
    }
     if (!posts.tags) {
        res.status(404);
        return res.json({
            status: 404,
            error: "Not Found",
            message: "Pizza non trovata"
        })
    }
    res.json(filter)
})

router.delete('/', (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.findIndex(post => post.titolo.toLowerCase().includes(req.query.titolo.toLowerCase()))
    if (post) {
        res.status(404);
        return res.json({
            status: 404,
            error: "Not Found",
            message: "Pizza non trovata"
        })
    }

    posts.splice(post, 1);
    console.log(posts)
    res.status(204)
    res.end()
})


module.exports = router