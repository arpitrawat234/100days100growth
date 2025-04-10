import { useState } from 'react'
import './App.css'


const Statistics=(props)=>{
  const good=props.good
  const neutral=props.neutral
  const bad=props.bad
  const all = good+bad+neutral
  const average=(good*3+neutral*2+bad*1)/all
   const  positive=good/all*100
   if(props.fdgiven){
    return( <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {average}</p>
      <p>Positive feedback: {positive}%</p>
      </div>)

//! directly changing the variable will not render the react

   }else 
  return (
 
  <p>
    No feedback given yet.
  </p>
  
  )
};
const App = () => {
  
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const[fdgiven,setFdgiven]=useState(false)
  

     const makeGood=()=>{setGood(good+1);setFdgiven(true)}
 
     const makeBad=()=>{setBad(bad+1);setFdgiven(true)}
  
     const makeNeutral=()=>{setNeutral(neutral+1);setFdgiven(true)}
     

  return (
    <div>
      <h1>
        Give Feedback
      </h1>
      <button onClick={makeGood}>good</button>
      <button onClick={makeNeutral}>neutral</button>
      <button onClick={makeBad}>bad</button>
      <Statistics good={good}neutral={neutral} bad={bad} fdgiven={fdgiven}/>
    </div>
  )
}

export default App