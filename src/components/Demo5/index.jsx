import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Demo5() {
    let timer = null
    const [count, setCount] = useState(0)

    useEffect(() => {
        addCount()

        // componentWillUnmount() 组件在销毁前清除副作用
        return () => {
            clearTimeout(timer)
        }
    })

    function addCount() {
        timer = setTimeout(() => {
            setCount(count + 1)
        }, 300)
    }
    
    return (
        <div>
           <div className="counter">counter: {count}</div>
        </div>
    )
}