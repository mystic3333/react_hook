import React, {useState} from 'react'


const useInputValue = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    return {
        value,
        setValue,
        onChange: e => setValue(e.target.value),
    }
}

const TodoForm = ({ submit }) => {
    const {setValue, ...text} = useInputValue('')
    console.log(text)

    function submitHandle(e) {
        e.preventDefault()
        submit(text.value)
        setValue('')
    }

    return (
        <form onSubmit={submitHandle}>
            <input type="text" {...text}/>
            <button type="submit">add</button>
        </form>
    )
}
export default TodoForm