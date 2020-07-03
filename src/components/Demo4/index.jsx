import React, { useState, useEffect } from 'react'

export default function Demo4() {
    const [tokenInput, setTokenInput] = useState({})
    const [token, setToken] = useState('') 

    useEffect(() => {
        const storageToken = localStorage.getItem('token')
        if (storageToken) {
            console.log('token exist')
        } else {
            console.log('token not exist')
        }
    })

    function onFormSubmit(e) {
        // console.log(e)

        // 组织表单默认提交行为
        if (e) {
            e.preventDefault()
            // 获取token
            const storagaToken = tokenInput.value
            setToken(storagaToken)
            // 存储到localStorage
            localStorage.setItem('token', storagaToken)
        }


    }


    return (
        <div>
            <form action="" onSubmit={onFormSubmit}>
                <input type="text"
                    placeholder="please type you token"
                    ref={input => setTokenInput(input)}
                />
                <button type="submit" >onSubmit</button>
            </form>
        </div>
    )
}