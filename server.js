const express = require('express')

const app = express()
const port = 3000

app.use(express.urlencoded())
app.use(express.json())

const { getArticles, findById, createArticle, updateArticle, deleteArticle } = require('./articles')

app.get('/', (req, res) => res.send('Hello word!'))

app.get('/articles', (req, res) => {
  const articles = getArticles()
  res.send(articles)
})

app.get('/articles/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const article = findById(id)
  res.send(article)
})

app.post('/articles', (req, res) => {
  const article = createArticle(req.body)
  res.send(article)
})

app.put('/articles/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const article = updateArticle(id, req.body)
  res.send(article)
})

app.delete('/articles/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const article = deleteArticle(id)
  res.send(article)
})

app.listen(port, () => console.log(`Blog app listening port ${port}!`))