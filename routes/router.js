const express = require('express')
const router = express.Router()
const port = process.env.PORT
const posts = require('../data/posts.js')
const {index, deleted, store, modify}= require('../controllers/postsController.js')

/* router.get('/', (req, res) => {
    res.json(posts)
}) */

router.get('/', filter)

router.delete('/', deleted)

router.post('/', store)

router.put('/:id', modify)

module.exports = router