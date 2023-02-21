import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function Counter({title, initValue}) {
  useEffect(() => {
    fetch('/counter')
    .then(resp => resp.json)
    .then(result => setCount(result.value))
  },[])

  const [count, setCount] = useState(initValue);

  const up = () => {
    const options = {
      method : "PATCH",
      header : {'Content-Type' : 'application/json'},
      body : JSON.stringify({value : count + 1}),
    }
    fetch('/counter',options)
    .then(resp => resp.json)
    .then(result => setCount(result.value))
  }
  const down = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(0);

  return <div> 
    <h1> {title} </h1>
    <button onClick={up}>+</button>
    <button onClick={down}>-</button>
    <button onClick={reset}>Reset</button>
    👉 {count}
  </div>
}
function App() {
  return (
    <div className="App">
      <Counter title ="카운트" initValue = {5}/>
    </div>
  );
}

export default App;
