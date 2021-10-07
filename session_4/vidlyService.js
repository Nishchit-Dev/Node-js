const express = require('express')
const app = express()
const bodyParser = require('body-Parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded())
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

const genre = [
    { name: "avengers", Typegenre: "action" },
    { name: "sherlock", Typegenre: "drama" },
    { name: "tintin", Typegenre: "comedy" },
    { name: "300", Typegenre: "horror" },
    { name: "hangover", Typegenre: "comdey" },
    { name: "siliconvalley", Typegenre: "series" }
]

// get request using the type of genre 
app.get('/movies/:G', (req, res) => {

    const movie_req = genre.find(o => o.Typegenre === req.params.G);
    res.send(movie_req)

})

// post request using the body 
app.post('/api/PostMovie', (req, res) => {

    genre.push({ name: req.body.name, genre: req.body.genre })
    res.send(genre)

})

// put request
app.put('/api/PutMovie', (req, res) => {
    var i = genre.findIndex(o => o.name === req.body.name)

    genre[i].name = req.body.newName;
    genre[i].Typegenre = req.body.newGenre

    res.send(genre)
})

// delete operation 

// json data 
// movie to be deleted , 
app.delete('/api/DeleteMovie', (req, res) => {
    var i = genre.findIndex(o => o.name == req.body.MtoDelete)
    if (i == -1) {
        res.send("sorry no element found")
    }

    genre.splice(i, 1)
    console.log(i)
    res.send(genre)
})

app.listen(3000, () => {
    console.log("server is listening 3000....")
})