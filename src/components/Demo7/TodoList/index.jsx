import React, {useState, useEffect} from 'react'
import TodoForm from '../TodoForm'


export default function TodoList() {
    const [data, setData] = useState([])
    

    function setValue(text) {
        setData([{text}, ...data])
        
    }

    function clearHandle() {
        setData([])
    }

    return (
        <div>
            TodoList
            <TodoForm submit={setValue}/>
            
            {
                data.map((element, index) => (
                <div key={index}>{ element.text }</div>
                ))
            }
            <button onClick={clearHandle}>clear</button>
        </div>
    )
}