import React, { useState } from 'react'

//const App3 = () => {
//   const [counter, setCounter] = useState(0)// here conter is init value and setcounter is updating fnc is written inside it 

//   console.log('rendering with counter value', counter)

//   const increaseByOne = () => {

//     console.log('increasing, value before', counter)
//     setCounter(counter + 1)
//   }
//   const Display = (props) => {
//     return (
//       <div>{props.counter}</div>
//     )
//   }

//   const decreaseByOne = () => { 

//     console.log('decreasing, value before', counter)
//     setCounter(counter - 1)
//   }

//   const setToZero = () => {

//     console.log('resetting to zero, value before', counter)
//     setCounter(0)
//   }
//   const Button = (props) => {
//     return (
//       <button onClick={props.onClick}>
//         {props.text}
//       </button>
//     )
//   }
//   return (
//     <div>
//       <Display counter={counter} />
//       <Button onClick={increaseByOne} text="plus" />
//       <Button onClick={setToZero} text="zero" />
//       <Button onClick={decreaseByOne} text="minus" />
//     </div>
//   )
// } 


//!

///const App3 = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)

//   return (
//     <div>
//       {left}
//       <button onClick={() => setLeft(left + 1)}>
//         left
//       </button>
//       <button onClick={() => setRight(right + 1)}>
//         right
//       </button>
//       {right}
//     </div>
//   )
// }
//!NOW INSTEAD OF THEESE WE CAN USE JUST THE OBJETC IN USETSATE {
//   left: 0,
//   right: 0
// }

//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })
 


//   const handleLeftClick = () => {
//     const newClicks = { 
//       left: clicks.left + 1, 
//       right: clicks.right 
//     }
//     setClicks(newClicks)
//   }

//   const handleRightClick = () => {
//     const newClicks = { 
//       left: clicks.left, 
//       right: clicks.right + 1 
//     }
//     setClicks(newClicks)
//   }

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }

const App3 = () => {

    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
  
    const [allClicks, setAll] = useState([])
  
  
    const handleLeftClick = () => {
      setAll(allClicks.concat('L'))
      setLeft(left + 1)
    }
  
  
    const handleRightClick = () => {
      setAll(allClicks.concat('R'))
      setRight(right + 1)
    }
  
    return (
      <div>
        {left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}
  
        <p>{allClicks.join(' ')}</p>
      </div>
    )
  }

  //!!READ THIS
  //!don't do this. As mentioned previously, the state of React components, like allClicks, must not be mutated directly.



  //join method   const elements = ["Fire", "Air", "Water"];

// console.log(elements.join());
// Expected output: "Fire,Air,Water"

// console.log(elements.join(""));
//  Expected output: "FireAirWater"

// console.log(elements.join("-"));
//  Expected output: "Fire-Air-Water"     




  export default App3