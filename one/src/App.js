// import Movies from "./Movies";

// function App()
// {
//   return(
//     <div> 
//       <h1>Movies</h1>
//     <Movies/>

//     </div>
  
//   )
// }
// export default App;


import Movies from "./Movies";
import { Component } from 'react';
import Joke from "./Joke";
import Crime from "./Crime";
import Action from "./Action";
import Scifi from "./Scifi";
class App extends Component
{
render ()
{
  return(
    <div className='app'>
      <h1>Movies</h1>
      <h1>Horror</h1>
      <Movies />
      <h1>Comedy Movies</h1>
      <Joke />
      <h1>Crime Movies</h1>
      <Crime/>
      <h1>Action Movies</h1>
      <Action/>
      <h1>Sci-Fi Movies</h1>
      <Scifi/>
    </div>
    
  )
}
}
export default App;
