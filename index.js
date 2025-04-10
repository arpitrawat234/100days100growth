console.log('Hello, Node.js!')


  
const express = require('express')

const app = express();
app.use(express.json())
let notes = [
    {
      id: "1",
      content: "HTML is easy",
      important: true
    },
    {
      id: "2",
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: "3",
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true
    }
  ]


  app.delete('/api/notes/:id', (request, response) => {
    const id = request.params.id
    notes = notes.filter(note => note.id !== id)
  
    response.status(204).end()
  })
  // app.post('/api/notes', (request, response) => {
  //   const note = request.body
  //   console.log(note)
  //   response.json(note)
  // })



  // app.post('/api/notes', (request, response) => {
  //   const maxId = notes.length > 0
  //     ? Math.max(...notes.map(n => Number(n.id))) 
  //     : 0
  
  //   const note = request.body
  //   note.id = String(maxId + 1)
  
  //   notes = notes.concat(note)
  
  //   response.json(note)
  // })

  const generateId = () => {
    const maxId = notes.length > 0
      ? Math.max(...notes.map(n => Number(n.id)))
      : 0
    return String(maxId + 1)
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
      important: body.important || false,
      id: generateId(),
    }
  
    notes = notes.concat(note)
  
    response.json(note)
  })


  app.get('/api/notes/:id', (request, response) => {
    const id = request.params.id
    const note = notes.find(note => note.id === id)
    response.json(note)

    if (notes) {
      response.json(notes)
    } else {
      response.status(404).end()
    }
  })

  app.get('/api/notes', (request, response) => {
    response.json(notes)

    if (notes) {
      response.json(notes)
    } else {
      response.status(404).end()
    }
  })

  const PORT = 3001

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
  
  


// This Node.js script creates an HTTP server using the http module. It listens on port 3001, responding with "Hello World" to all requests. The createServer function handles incoming connections, sending a 200 status and text/plain content type. The listen method starts the server, logging a confirmation message. 🚀

// const PORT = 3001
// app.listen(PORT)

// console.log(`Server running on port ${PORT}`)




//! we can define route parmater using the : this