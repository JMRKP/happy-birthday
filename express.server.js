import express from 'express';
const server = express()
server.use(express.static('dist'))
server.listen(3001, () => {
    console.log('Go to http://localhost:3001/index.html#0')
})