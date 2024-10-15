var express = require('express')
var cors = require('cors')
var app = express()

const { mostrarPosts, crearPost } = require('./consultas')

app.use(cors())
app.use(express.json())

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000')
})

app.get('/posts', async (req, res) => {
  await mostrarPosts().then(posts => {
    res.send(posts)
  })
})

app.post('/posts', async (req, res) => {
  const { titulo, url, descripcion } = req.body
  crearPost(titulo, url, descripcion).then(post => {
    res.send(post)
  })
})