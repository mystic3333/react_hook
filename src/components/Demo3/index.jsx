import React, {useState,useEffect} from 'react'

export default function Demo3() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `you click ${count} times`
        console.log(count)
    })

    function addHandle () {
        setCount(count + 1)
    }

    return (
        <div>
            msg: you click {count} times
            <button onClick={addHandle}>add</button>
        </div>
    )
}