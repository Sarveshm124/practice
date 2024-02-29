import Movie from "./Movie";
import ActionData from "./actiondata";
function Action()
{
    return(
        <div className='movies'>{
           ActionData.map((m)=>(<Movie url={m.Image} title={m.title}/>
            ))
        }
         
        </div>
    )
}
export default Action;