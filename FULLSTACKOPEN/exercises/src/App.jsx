

const App = () => {
  
  
// const part2 = {name:'Using props to pass data',
// exercises : 7}

// const part3 ={ name:'State of a component', 
//   exercises :14 
// }

// const part1 = {name:'Fundamentals of React',
// exercises: 10 }
// this was also a way of doing it
const course = {name:'Half Stack application development',
parts:[{name:'Using props to pass data',
  exercises : 7},
  
{ name:'State of a component', 
    exercises :14 
  },
  
 {name:'Fundamentals of React',
  exercises: 10 }]
  

}

// const part2 = 'Using props to pass data'
// const part3 = 'State of a component'
// const exercises1 = 10
return (
  <>
      <Header course={course}/>
      <Content Part1={part.name} exercises1={part1.exercises} Part2={part.name} exercises2={part2.exercises} Part3={part3.name} exercises3={part3.exercises} />
      <Total exercises1={part1.exercises} exercises3={part3.exercises} exercises2={part2.exercises}  />
      {/* <h1>{course}</h1>
      <p>
        {part1} {exercises1}
        no need to piut bapticls oor stuff here
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
    </>
  )
}

const Header=(props)=>{
console.log(props)//use the console technique as agood code practice to get code for reviewing any mistakes
return(
<h1>{props.course}</h1>
)

}
const Content=(prop)=>{
  //here we can pass prop into recat elemnts as a elemt tag
  return( 
  <>
 <Part prop1={prop.Part1} prop2={prop.exercises1}/>
 <Part prop1={prop.Part2} prop2={prop.exercises2}/>
 <Part prop1={prop.Part3} prop2={prop.exercises3}/>
  </>
  )
}
const Total=(prop)=>{
  return(<p>Number of exercises {prop.exercises2+prop.exercises1+prop.exercises3}</p>)
}
const Part=(prop)=>{
return(
  <p>
  {prop.prop1} {prop.prop2}

  </p>
)
}
export default App