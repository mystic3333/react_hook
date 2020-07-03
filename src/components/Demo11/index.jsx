import React, { useState, useCallback } from 'react'

const Demo11 = () => {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

    return (
        <div>
            count: {count}
            <button onClick={() => { setCount(count + 1) }}>add count</button>

            count1: {count1}
            <button onClick={useCallback(() => { setCount1(count1 + 1) }, [count])}>add count1</button>
        </div>
    )
}

export default Demo11