import {useState} from "react";
 
import './App.css';

function App() {
  const [c, setCount] = useState(0)
  
  return (
    <div className="counter">
      <div>
        Count:{c}
      </div>
<button onClick={()=>setCount (c+1)}>+</button>
<button onClick={()=>setCount (c-1)}>-</button>
<button onClick={()=>setCount(c-c)}>reset</button>

    </div>
  );
}

export default App;
