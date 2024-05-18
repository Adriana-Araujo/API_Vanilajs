//console.log('Ola mundo!')
import express from 'express'
import routes from './routes/index.js'


const app = express()
const PORT = 3000

app.use(express.json())
app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`O Servidor esta executando em http://localhost:${PORT}`)
})