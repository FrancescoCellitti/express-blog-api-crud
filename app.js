require('dotenv').config()
const express = require('express')
const app = express()
const postsRouter = require('./routes/posts')
const port = process.env.PORT
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send(`<h1>Server del mio blog<h1>`)
})







app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);

})
app.use('/posts', postsRouter)