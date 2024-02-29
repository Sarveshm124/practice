import Movie from "./Movie";
import moviesData from "./data";
function Movies ()
{
    return(
        <div className='movies'>{
            moviesData.map((m)=>(<Movie url={m.Image} title={m.title}/>
            ))
        }
         
        </div>
    )
}
export default Movies;