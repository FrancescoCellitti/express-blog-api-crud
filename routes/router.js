const express = require('express')
const router = express.Router()
const port = process.env.PORT
const posts = require('../data/posts.js')
const { index, deleted, store, modify, notFound, error } = require('../controllers/postsController.js')

/* router.get('/', (req, res) => {
    res.json(posts)
}) */

router.get('/', index)

router.post('/', store)

router.put('/:id', modify)

router.delete('/', deleted)

module.exports = router