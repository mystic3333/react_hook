import React from 'react'
import Child from './Child'


export const MyContext = React.createContext()

const Demo13 = () => {
    return (
        <MyContext.Provider value={{ name: 'mystic' }}>
            <Child />
        </MyContext.Provider>
    )
}

export default Demo13