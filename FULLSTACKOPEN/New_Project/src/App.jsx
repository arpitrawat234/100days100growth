// const Hello = (props
//   here we can add the props as a argument  that are then passed to the sources
//   //! <hello name="hardcoded " age={js inside that returns shit}
//   //! hello name={name} can add the javascript values
// ) => {  return (    <div>      
//   <p>Hello world {props.name}</p>
// </div>  
//   )}


// const App=()=>{
//   const now = new Date();
//   console.log("Hello everyone")
//   return(
//     <div>
//     <h1>Greetings</h1>
//     <Hello name="george"/>
//     <Hello />
//     <Hello /> { /* it helps in reusablity of the code we are using the hello func now as a compoenent  */}
//      </div>

    //<div>
     // <p>
    //     `Hello World and the universe its {now.toString()}`
    //   </p>
    // </div>

//   )
// }
// export default App
const Hello = (props) => {

  console.log(props)
  return (
    <div>
      <p>

        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {

  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]


  // const name = 'Peter'
  // const age = 10

  return (
    <div>
      <h1>Greetings</h1>
{/* its good to cosnole,log out objects or stuff to be safeside */}
      <Hello name='Maya' age={26 + 10} />
      {/* <Hello name={name} age={age} /> */}
      <p>{friends[0].age}</p>
      <p>{friends[1].name}</p>
      {/* the object to be renederd to be a primtive values etc */}
      
    </div>
  )
}

const footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

export default App