const express = require('express')
const validUrl = require('valid-url')

const shortUrls = require('./urls')

const app = express()
const port = process.env.PORT || 3000

app.get('/:id', (req, res) => {
  const { id } = req.params
  const link = shortUrls.find(id)

  if (link) {
    res.statusCode = 302
    res.setHeader('Location', link.original)
    res.end()
  } else {
    res.json({error: `No url found for ${id}`})
  }
})

app.get('/new/*', (req, res) => {
  const url = req.url.slice(5)

  if (!validUrl.isWebUri(url)) {
    res.json({error: 'invalid url'})
  } else if (shortUrls.includes(url)) {
    res.json(shortUrls.get(url))
  } else {
    res.send(shortUrls.add(url))
  }

})

app.get('/*', (req, res) => {
  res.send(`
    <div style="height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#777;">
      <h1>Free Code Camp Short Url App</h1>
      <p>Create a new short url: /new/yourUrl
    </div>
  `)
})

app.listen(port, () => console.log(`Server is running on port:${port}`))
