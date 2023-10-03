import React from 'react'
import './App.css';


const App = () => {
  const[counterValue,setCounter]=React.useState(0);

  return (
    <div id="parent">
      <h1>{counterValue}</h1>
      <button onClick={()=>{setCounter(counterValue+1)}}>Increment</button>
      <button onClick={()=>{setCounter(counterValue-1)}}>Decrement</button>
    </div>
  )
}

export default App
