const express = require('express')

const morgan = require('morgan');
const cors = require('cors')




const app = express();
app.use(express.json())
app.use(cors())

app.use(express.static('dist'))

morgan.token('person-data', function (req) {
  return req.method === 'POST' ? JSON.stringify(req.body) : '';
});


app.use(morgan(':method :url :status :res[content-length] - :response-time ms :person-data'));



app.use(morgan('type'));

let phone=
[
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

let length=phone.length;
let current=new Date();

app.get('/api/persons', (req, res) => {
  res.json(phone)})


app.get('/api/info', (req, res) => {
    res.end(`<p>Phonebook has info for ${length} people</p>
     <p>${current}</p>`)})



app.get('/api/persons/:id', (req, res) => {
       
const id=req.params.id;

const person=phone.find(p=>p.id===id);

if(person){
    res.json(person)}
    else{
    res.status(404).json({error: 'person not found'})}
})
      

app.delete('/api/persons/:id', (req, res) => {
    const id = (req.params.id);
    phone = phone.filter(p => p.id !== id);
  
    res.status(204).end();
  });
    

  // Generate random ID

  app.post('/api/persons', (req, res) => {
    const body = req.body;
  
    console.log(JSON.stringify(req.body))
    // Error handling for missing fields
    if (!body.name || !body.number) {
      return res.status(400).json({ error: 'name or number is missing' });
    }
  
    // Error handling for duplicate names
    const nameExists = phone.some(p => p.name === body.name);
    if (nameExists) {
      return res.status(400).json({ error: 'name must be unique' });
    }
  
    // Generate random ID
    const newPerson = {
      id: Math.floor(Math.random() * 1000000),
      name: body.name,
      number: body.number
    };
  
    phone.push(newPerson);
    res.json(newPerson);
  });



const port=process.env.PORT|| 3022

app.listen(port, (req, res) => 
console.log(`listening on port ${port}`))
