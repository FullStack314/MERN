const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())

app.use(cors())

let notes = [{id: 1,content: 'The decline has resulted in a 19 P/E ratio and a 4.35% dividend yield. Some analysts believe the bottom is in for UPS stock.',important: true},
  {id: 2,content: 'MSFT has been giving out dividends and growing them for 19 consecutive years.',important: false},
  {id: 3,content: 'As conflicted as our judgements might be about Israel’s conduct of its war in Gaza, there should be no ambiguity about our condemnation of Iran’s attack on Israel. ',important: true}]

app.get('/', (request, response) => {
  response.send('<h1>Hello Express World!</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)
  
  if (note) {response.json(note)
  } else {response.status(404).end()}
})

const generateId = () => {
  const maxId = notes.length > 0? Math.max(...notes.map(n => n.id)): 0
  return maxId + 1
}


app.post('/api/notes', (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const note = {
    content: body.content,
    important: Boolean(body.important) || false,
    id: generateId(),
  }

  notes = notes.concat(note)

  response.json(note)
})



const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})