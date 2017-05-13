const fs = require('fs')
const shortid = require('shortid')

const fetchUrls = () => {
  try {
    const urls = fs.readFileSync('urls-data.json')
    return JSON.parse(urls)
  } catch (err) {
    return []
  }
}

const saveUrls = (urls) => {
  fs.writeFileSync('urls-data.json', JSON.stringify(urls))
}

const add = url => {
  const urls = fetchUrls()
  const id = shortid.generate()

  const shortUrl = {
    original: url,
    short: id,
    shortLink: `http://fcc-short-url.herokuapp.com/${id}`
  }
  
  urls.push(shortUrl)
  saveUrls(urls)
  
  return shortUrl
}

const get = url => {
  const urls = fetchUrls()
  return urls.find(_url => _url.original === url)
}

const includes = url => {
  const urls = fetchUrls()
  return urls.some(_url => _url.original === url)
}

const find = id => {
  const urls = fetchUrls()
  return urls.find(_url => _url.short === id)
}

module.exports = {
  add,
  get,
  includes,
  find
}
