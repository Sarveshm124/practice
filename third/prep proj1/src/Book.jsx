import Books from "./Books";
import { motivation, motivations } from "./BooksLib";
function Book()
{
    return(
        <div>
            {
                motivation.map((l)=>
                    <Books url={l.image} title={l.title}/> 
                )
            }

            {
                motivations.map((pass) => 
                    <Books urls={pass.image} kalu={pass.kalu}/> 


                
                )
            }
        </div>
    )
}
export default Book;