import Movie from "./Movie";
import CrimeData from "./crimedata";
function Crime()
{
    return(
        <div className='movies'>{
            CrimeData.map((m)=>(<Movie url={m.Image} title={m.title}/>
            ))
        }
         
        </div>
    )
}
export default Crime;