import React, { useState } from 'react';
import './App.css';
function App() {
  const[backGround,setBackground]=useState('#0000000')
  function change(){
    const random_color="#"+Math.round(Math.random()*10000000).toString(16);
    setBackground(random_color);
  }
  return (
    <div className='changer' style={{background:backGround}}>
      <button onClick={change}>change</button>
    </div>
  )
}

export default App;
