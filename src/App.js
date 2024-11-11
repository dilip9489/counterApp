 
import './App.css';


import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev)=>prev + 1);
  };

  const decrement = () => {
    setCount((prev)=>prev - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment} style={{ margin: '5px', padding: '10px 20px', borderRadius:"5px",border:"none" }}>
        Increment
      </button>
      <button onClick={decrement} style={{ margin: '5px', padding: '10px 20px' , borderRadius:"5px", border:"none"}}>
        Decrement
      </button>
    </div>
  );
}

 


function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
