const express = require('express')    //importiamo express
const app = express()   //inizializziamo express
const port = 3000

app.use(express.static("public")); //alla funzione static diamo il nome della cartella

app.get('/', (req, res) => {    //definiamo le rotte
  res.send('Hello World!')
})

app.listen(port, () => {    //avviamo il server
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {    //definiamo le rotte
  let markup = `<h1>Benvenuto nel mio blog!</h1>`
  res.send(markup)
})

const posts = require("./controllers/posts.js");
app.get("/posts", posts.index);