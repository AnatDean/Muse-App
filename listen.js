const PORT = process.env.port || 3000
const app = require('./app')

app.listen(PORT, (err) => {
  if (err) console.log('Error starting server')
  console.log(`Listening on port: ${PORT}`)
})
