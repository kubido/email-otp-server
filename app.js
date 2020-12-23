require('dotenv').config()

const express = require('express')
const fs = require('fs')
const marked = require('marked')

const app = express()
const PORT = process.env.PORT || 3000

const otpRoutes = require('./routes/otpRoutes')

app.use(express.json())


app.get('/', (req, res) => {
  let path = __dirname + '/views/homepage.md';
  let file = fs.readFileSync(path, 'utf8');
  let html = marked(file.toString())
  res.send(html)
})

app.use('/otp', otpRoutes)


app.listen(PORT, () => {
  console.log('server started at port', PORT);
})