const express = require('express')
const router = express.Router()
const port = process.env.PORT


const posts = [
    {
        titolo: "Ciambellone soffice",
        contenuto: "Ricetta tradizionale per un ciambellone soffice e profumato.",
        immagine: `http://localhost:${port}/images/ciambellone.jpeg`,
        tags: ["dolci", "colazione", "tradizione"]
    },
    {
        titolo: "Cracker alla barbabietola",
        contenuto: "Snack salutare e colorato a base di barbabietola.",
        immagine: `http://localhost:${port}/images/cracker_barbabietola.jpeg`,
        tags: ["snack", "barbabietola", "salutare"]
    },
    {
        titolo: "Pane fritto dolce",
        contenuto: "Un modo goloso per riciclare il pane raffermo.",
        immagine: `http://localhost:${port}/images/pane_fritto_dolce.jpeg`,
        tags: ["dolci", "pane", "riciclo"]
    },
    {
        titolo: "Pasta alla barbabietola",
        contenuto: "Un primo piatto originale dal colore vivace.",
        immagine: `http://localhost:${port}/images/pasta_barbabietola.jpeg`,
        tags: ["primi", "barbabietola", "vegetariano"]
    },
    {
        titolo: "Torta paesana",
        contenuto: "Dolce tipico lombardo ricco di sapori autentici.",
        immagine: `http://localhost:${port}/images/torta_paesana.jpeg`,
        tags: ["dolci", "lombardia", "tradizione"]
    }
]
router.get('/api/posts', (req, res) => {
    res.json(posts)
})

router.get('/', (req, res) => {
    res.json(posts)
})

router.post('/', (req, res) => {
    res.send('add a new post')
})

router.put('/:id', (req, res) => {
    res.send('modifica del post ' + req.params.id)
})

router.patch('/:id', (req, res) => {
    res.send('modifica singola del post ' + req.params.id)
})

router.delete('/:id', (req, res) => {
    res.send('cancellazione del post ' + req.params.id)
})

router.get('/:id', (req, res) => {
    res.json(posts[parseInt(req.params.id)])
})

module.exports = router