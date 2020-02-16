let articles = [
  {
    id: 1,
    title: "artikel 1",
    description: "desc artikel 1"
  }, {
    id: 2,
    title: "artikel 2",
    description: "desc artikel 2"
  }, {
    id: 3,
    title: "artikel 3",
    description: "desc artikel 3"
  }
]

module.exports.getArticles = () => {
  return articles
}

module.exports.findById = (id) => {
  let article = null
  articles.map(obj => {
    if (obj.id === id){
      article = obj
    }
  })
  return article
}

module.exports.createArticle = (body) => {
  const article = {
    id: articles.length + 1,
    title: body.title,
    description: body.description
  }
  articles.push(article)
  return article
}

module.exports.updateArticle = (id, body) => {
  articles = articles.map(obj => {
    if(obj.id === id) {
      obj.title = body.title
      obj.description = body.description
    }
    return obj
  })
  return {
    id, 
    ...body
  }
}

module.exports.deleteArticle = (id) => {
  const newArticles = []
  let deletedArticle = null
  articles.map(article => {
    if(article.id !== id) {
      newArticles.push(article)
    } else {
      deletedArticle = article
    }
  })
  articles = newArticles
  return deletedArticle
}
