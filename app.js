const express = require('express')
const app = express()
const hostname = '192.168.56.1'
const port = 3002

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

