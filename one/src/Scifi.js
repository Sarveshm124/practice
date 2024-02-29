import Movie from "./Movie";
import ScifiData from "./Scifidata";
function Scifi()
{
    return(
        <div className='movies'>{
            ScifiData.map((m)=>(<Movie url={m.Image} title={m.title}/>
            ))
        }
         
        </div>
    )
}
export default Scifi;