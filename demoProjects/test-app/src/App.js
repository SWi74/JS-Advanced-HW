import React from "react"
import ReactDOM from "react-dom"

function evenNumber(number) {
    return number%2 ?
      <strong>Odd</strong>:
      <strong>Even</strong>
  }
  
  function App() {
    let x = 4;
    return <div>{x} is {evenNumber(x)}</div>;
  }

  export default App