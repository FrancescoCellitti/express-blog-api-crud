require('dotenv').config()
const port = process.env.PORT
const express = require('express')
const app = express()
const postsRouter = require('./routes/router')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send(`<h1>Server del mio blog<h1>`)
})
app.use('/posts', postsRouter)






app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);

})
