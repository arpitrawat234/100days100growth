const App = () => {
  const course = [{
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]
  return <Course course={course} />
}

export default App
const Course=(props)=>{
  return (
    <div>
    <header>
    <h1>Web Dev curriculum</h1>
    <h1>{props.course[0].name}</h1>
   
    </header>
    <ul>
    {props.course[0].parts.map(part =>
      <li key={part.id}>{part.name} {part.exercises}</li>)}
<p>
      Total of {props.course[0].parts.reduce((s, p) => s + p.exercises, 0)} exercises.
    </p>
       <h1>{props.course[1].name}</h1>
      {props.course[1].parts.map(part =>
        <li key={part.id}>{part.name} {part.exercises}</li>)}
      
    
    <p>
      Total of {props.course[1].parts.reduce((s, p) => s + p.exercises, 0)} exercises.
    </p>
    </ul>
    </div>
    
  )
}

