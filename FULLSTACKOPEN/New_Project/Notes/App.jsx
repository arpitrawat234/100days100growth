const App = () => {
    const friends = [
      { name: 'Peter', age: 4 },
      { name: 'Maya', age: 10 },
    ]
  
    return (
      <div>
        <p>{friends[0]}</p>
        <p>{friends[1]}</p>
      </div>
    )
  }
  
  export default App