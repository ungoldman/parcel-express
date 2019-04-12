const Bundler = require('parcel-bundler')
const app = require('express')()

const PORT = process.env.PORT || 8080

// pass an absolute path to the entrypoint here
const file = './index.html'

// see options section of api docs for more info
// https://parceljs.org/api.html
const options = { logLevel: 2 }

// initialize a new bundler using file and options
const bundler = new Bundler(file, options)

// define any routes you don't want parcel to intercept
// before using the middleware
app.get('/test/:hello', (req, res) => {
  res.send(req.params.hello)
})

// let express use the bundler middleware
// this will let Parcel handle every request over your express server
app.use(bundler.middleware())

// Listen on port
app.listen(PORT, () => {
  console.log(`parcel express listening on ${PORT} 📡`)
})
