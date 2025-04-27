import React from 'react'
import { useState } from "react"
import Todo from './Todo'

function Todos ()
{
    const [values, setValues] = useState([])
    const [value, setValue] = useState("")
   
		const add = () => {
			setValues([...values, value])
			setValue("")
		}
		const remove = (id) => {
			values.splice(id, 1)
			setValues([...values])
    }
   
   
  return (
		<div>
			<div>
				<input
					type='text'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button onClick={add}>click</button>
          </div>
         
			<ul>
				{values.map((t ) => (
                    <Todo task={t}  remove={remove}  />
				))}
			</ul>
		</div>
	)
}

export default Todos
