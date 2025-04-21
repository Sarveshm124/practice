import Movie from "./Movie";
//import ComedyData from "./comedydata";
import ComedyData from "./data"
function Joke ()
{
    return(
        <div className='movies'>{
            ComedyData.map((m)=>(<Movie url={m.Image} title={m.title}/>
            ))
        }
         
        </div>
    )
}
export default Joke;