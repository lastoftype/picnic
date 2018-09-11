require('dotenv').config()

const dev = process.env.NODE_ENV !== 'production'

const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const next = require('next')
const app = next({ dev })
const defaultRequestHandler = app.getRequestHandler()

// Routes
const routes = require('./routes')

// Db info
const LOCAL_DB = 'picnic1'
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost/${LOCAL_DB}`
const PORT = process.env.PORT || 4000

// Server
const server = express()

// Run Next app and Server
app.prepare().then(() => {

  server.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 5000}))
  server.use(bodyParser.json({limit: '50mb'}))
  server.use(logger('dev'))
  server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next()
  })

  // Mongodb
  mongoose.Promise = require('../lib/promise');
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
  mongoose.connection.on('error', () => {
      console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
      process.exit(1);
  });
  mongoose.set('debug', process.env.NODE_ENV !== 'production');

  // Routes
  server.post('/api/friends', routes.postFriend)
  server.post('/api/remove', routes.removeFriend)
  server.post('/api/update/:id', routes.updateFriend)

  server.get('/api/friends/:id', routes.getFriend)
  server.get('/api/friends', routes.getAllFriends)

  // Next.js request handling
  const customRequestHandler = (page, req, res) => {
    // Both query and params will be available in getInitialProps({query})
    const mergedQuery = Object.assign({}, req.query, req.params);
    app.render(req, res, page, mergedQuery)
  }

  // Routes
  server.get('/', customRequestHandler.bind(undefined, '/'))
  server.get('*', defaultRequestHandler)

  server.listen(PORT, () => {
    const message = `App running on http://localhost:${PORT}/
API running on http://localhost:${PORT}/api`
    console.log(message)
  });

})