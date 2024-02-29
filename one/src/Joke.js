import Movie from "./Movie";
import ComedyData from "./comedydata";
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