import React, { useState } from 'react';
import './App.css';

import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);

  const handleButtonClick = () => {
    setCounter(counter + 1);
  }

  return (
    <>
      <Header title={`Contador: ${counter}`} />

      <h1>{counter * 2}</h1>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </>
  );
}

export default App;
