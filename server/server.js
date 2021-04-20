import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'
import axios from 'axios'

import cookieParser from 'cookie-parser'
import config from './config'
import Html from '../client/html'

const { readFile, writeFile } = require('fs').promises

require('colors')

let Root
try {
  // eslint-disable-next-line import/no-unresolved
  Root = require('../dist/assets/js/ssr/root.bundle').default
} catch {
  console.log('SSR not found. Please run "yarn run build:ssr"'.red)
}

let connections = []

const port = process.env.PORT || 8090
const server = express()

const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  bodyParser.json({ limit: '50mb', extended: true }),
  cookieParser()
]

middleware.forEach((it) => server.use(it))

const readingFile = async (file) => {
  const dataOfTheCurrentWeek = await readFile(`${__dirname}/data/${file}`, { encoding: 'utf8' })
  const dataOfTheCurrentWeekParse = JSON.parse(dataOfTheCurrentWeek)
  return dataOfTheCurrentWeekParse
}

const writingFile = (data, file) => {
  return writeFile(`${__dirname}/data/${file}`, JSON.stringify(data), {encoding: 'utf8'})
}

server.get('/api/v1/initialListOfAsteroids', async (req, res) => {
  try {
    const initialList = await readingFile('initialListOfAsteroids.json')
    res.send(initialList)
  } catch (err) {
    const currencyDate = new Date().toISOString().slice(0, 10)
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${currencyDate}&api_key=DEMO_KEY`
    const {
      data: { near_earth_objects: getObjectOfList }
    } = await axios(url)
    writingFile(getObjectOfList, 'initialListOfAsteroids.json')
    res.send(getObjectOfList)
  }
})

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

const [htmlStart, htmlEnd] = Html({
  body: 'separator',
  title: 'Skillcrucial'
}).split('separator')

server.get('/', (req, res) => {
  const appStream = renderToStaticNodeStream(<Root location={req.url} context={{}} />)
  res.write(htmlStart)
  appStream.pipe(res, { end: false })
  appStream.on('end', () => {
    res.write(htmlEnd)
    res.end()
  })
})

server.get('/*', (req, res) => {
  const appStream = renderToStaticNodeStream(<Root location={req.url} context={{}} />)
  res.write(htmlStart)
  appStream.pipe(res, { end: false })
  appStream.on('end', () => {
    res.write(htmlEnd)
    res.end()
  })
})

const app = server.listen(port)

if (config.isSocketsEnabled) {
  const echo = sockjs.createServer()
  echo.on('connection', (conn) => {
    connections.push(conn)
    conn.on('data', async () => {})

    conn.on('close', () => {
      connections = connections.filter((c) => c.readyState !== 3)
    })
  })
  echo.installHandlers(app, { prefix: '/ws' })
}
console.log(`Serving at http://localhost:${port}`)
