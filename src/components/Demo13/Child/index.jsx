import React, { useContext } from 'react'
import { MyContext } from '../index'

export default function Child() {
    return (
        <div>
            Child: {useContext(MyContext).name}
        </div>
    )
}