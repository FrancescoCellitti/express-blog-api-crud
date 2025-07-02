const posts = require('../data/posts')




function filter(req, res) {
    let filter = posts;
    if (req.query.tags) {
        filter = posts.filter(
            post => post.tags.includes(req.query.tags)
        )
    }
    if (filter.length === 0) {
        res.status(404);
        return res.json({
            status: 404,
            error: "Not Found",
            message: "Pizza non trovata"
        })
    }
    res.json(filter)
}

function deleted(req, res) {
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
}


function store(req, res) {
   /*  const newPost = {
        "titolo": "'Focaccia alle olive'",
        "contenuto": "'Una focaccia soffice e saporita arricchita con olive verdi.'",
        "immagine": "http://localhost:3030/",
        "tags": "[ 'pane', 'focaccia', 'aperitivo' ]"
    } */
    posts.push(req.body)
    console.log(req.body)


    res.status(201);
    res.json(posts);
}

module.exports = { filter, deleted, store }