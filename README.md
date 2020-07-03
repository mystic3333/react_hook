# React Hook

测试api接口: http://iwenwiki.com/api/blueberrypai/

### useState

``` 
import React,{useState} from 'react'

export default function Demo2() {
    const letters = ['a', 'b', 'c', 'd']

    const [letter, setLetter] = useState(letters[0]) 

    function changeLetter() {
        let randomIndex = Math.floor(Math.random() * letters.length)
        setLetter(letters[randomIndex])
        console.log(randomIndex)
    }

    return(
        <div>
            current letter: { letter }
            <button onClick={changeLetter}>change user</button>
        </div>
    )

}

```

### useEffect

useEffect 是三个声明周期的函数的组合函数, 分别代表:
componentDidMount()
componentDidUpdate()
componentWillUnmount()

``` 
// 基本的示例
import React, {useState, useEffect} from 'react'

export default function Demo() {

    const [count, setCount] = useState(0)

    useEffect(() => {

        // componentDidMount() 首次渲染完成
        console.log(count)

        // componentWillUnmount() 组件销毁钩子
        return () => {
        
        }

        // 第二个参数加上中括号代表的是componentDidUpdate() 组件数据更新
    }, [])

    return (
        <div>
            demo
        </div>
    )
}
```

``` 
// useState小demo
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
```

### useState 和 useEffect 设置token案例

``` 
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
```

### useEffect清除副作用案例 - 定时器案例

需要清除副作用的场景包括:

1. 定时器
2. 异步请求
3. 清空state状态

``` 
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
```

### todolist案例

``` 
// TodoForm.jsx文件
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

// TodoList.jsx文件
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
```

### useEffect性能优化

``` 
// import React from 'react'

// export default class Demo8 extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0,
//             name: 'mystic'
//         }
//     }

//     componentDidMount() {
//     }

//     componentDidUpdate(prevProps, prevState) {
//         // 在count没有发生改变的时候我们不希望更新钩子函数执行
//         if (prevState.count !== this.state.count) {
//             document.title = `you click add ${this.state.count} times`
//             console.log('count executed')
//         }

//         if (prevState.name !== this.state.name) {
//             console.log('name executed')
//         }

//     }

//     countHandle = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     changeName = () => {
//         this.setState({
//             name: 'xxx'
//         })
//     }

//     render() {
//         return (
//             <div>
//                 count: { `you click ${this.state.count} times` }
//                 name: { this.state.name}
//                 <button onClick={this.countHandle}>add count</button>
//                 <button onClick={this.changeName}>change name</button>
//             </div>
//         )
//     }
// }

// React Hook useEffect优化钩子函数示例
import React, { useState, useEffect } from 'react'

const Demo8 = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('mystic') 

    // 第一个参数相当于 componentDidMount()
    // 第二个参数相当于 componentDidUpdate(), 第二个参数传递不希望数据没有被改变却执行了更新钩子的哪个参数
    // return () => {} 相当于 componentWillUnmount()
    useEffect(() => {
        document.title= `you click ${count} times`
        console.log('executed')
    }, [count, name])

    return(
        <div>
            count: { ` you click ${count} times ` }
            name: { name }
            <button onClick={ () => {setCount(count + 1)} }>add count</button>
            <button onClick={ () => { setName('xxx') } }>change name</button>
        </div>
    )
}

export default Demo8
```

### React新特性 网络请求

``` 
import React, { useState, useEffect } from 'react'

// 自定义hook
const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            if (data.length === 0) {
                const response = await fetch(url)
                const data = await response.json()
                console.log(data)
                setData(data)
                setLoading(false)
            }

        })()
    }, [data])

    return {
        data,
        loading
    }
}

const Demo9 = () => {

    const { data, loading } = useFetch('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php')

    return (
        <div>
            demo9:
            {
                loading
                    ?
                    <div>loading...</div>
                    :
                    data.chengpinDetails[0].title
            }
        </div>
    )
}

export default Demo9
```

### React memo

当子组件上一次跟下一次传递的数据是一致的时候, 父组件的state状态更新子组件不会重新渲染

``` 
// parent.jsx文件
import React from 'react'
import Child from './Child'

export default class Demo10 extends React.PureComponent {
    state = {
        time: new Date()
    }

    setTime = () => {
        setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }

    componentDidMount() {
        this.setTime()
    }

    render() {
        console.log('render')
        return (
            <div>
                <Child num={123} />
                date: { this.state.time.toString() }
            </div>
        )
    }
}

// child.jsx文件
import React from 'react'

 class Child extends React.Component {
    render() {
        console.log('child render')
        return (
            <div>
                num: {this.props.num}
            </div>
        )
    }
}

export default React.memo(Child)
```

### useCallback

1. useCallback传递两个参数
2. 第一个参数, 是一个函数, 第一次会执行一次, 然后在第二个参数state发生改变的时候才会执行
3. 第二个参数的state改变, 会触发第一个参数执行

``` 
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
```

### useReducer

``` 
import React, { useReducer } from 'react'

const initialState = {
    count: 0
}

function reducer(state, action){
    switch(action.type) {
        case 'increment':
            return {
                count: state.count + 1
            }
        case 'decrement': 
            return {
                count: state.count - 1
            }
        default: 
            return state
    }
}
function Demo12() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            count: {state.count}
            // onClick事件中写回调是因为不希望程序运行立即执行
            <button onClick={ () => { dispatch({ type: 'increment' }) } }>+</button>
            <button onClick={ () => dispatch({type: 'decrement'}) }>-</button>
        </div>
    )
}

export default Demo12
```

### useContext

提醒: 一般情况下全局的数据存储还是用redux

``` 
// Parent.jsx文件
import React from 'react'
import Child from './Child'

// 导出这个context, 在子组件中引用
export const MyContext = React.createContext()

const Demo13 = () => {
    return (
        <MyContext.Provider value={{ name: 'mystic' }}>
            <Child />
        </MyContext.Provider>
    )
}

export default Demo13

// Child.jsx文件
import React, { useContext } from 'react'
import { MyContext } from '../index'

export default function Child() {
    return (
        <div>
            Child: {useContext(MyContext).name}
        </div>
    )
}
```

### contextType

``` 
import React from 'react'

export const MyContext = React.createContext()

export default class Demo14 extends React.Component {
    

    render() {
        return (
            <MyContext.Provider value={"this is a react context provider"}>
                <Middle />
            </MyContext.Provider>
        )
    }
}

class Middle extends React.Component {
    render() {
        return (
            <div>
                <Bottom></Bottom>
            </div>
        )
    }
}

class Bottom extends React.Component {
    static contextType = MyContext

    render() {
        // consumer的方式
        // return (
        //     <MyContext.Consumer>
        //         { 
        //             value => <h1>{value}</h1>
        //         }
        //     </MyContext.Consumer>
        // ) 

        // contextType的方式
        const value = this.context
        return (
            <div>
                {this.context}
            </div>
        )
    }
}
```

### React state深入理解

setState属于异步操作
setState同步和异步的问题
setState会执行完所有异步操作之后, 才执行异步回调函数

``` 
// 实现一个需求让setState对count实现累加操作

import React from 'react'

export default class Demo15 extends React.Component {
    state = {
        count: 0
    }

    /* componentDidMount() {
        // 这个示例的意思是将三个setState异步操作合并为一个去执行了
        this.setState({
            count: this.state.count + 1
        })
        this.setState({
            count: this.state.count + 1
        })
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count) // 0, 最终高输出是零, 证明setState是异步的
    } */

    // 这种方法可以使setState变成同步操作
    /* componentDidMount() {
        this.setState((prev, props) => ({
            count: prev.count + 1
        }))
        this.setState((prev, props) => ({
            count: prev.count + 1
        }))
        this.setState((prev, props) => ({
            count: prev.count + 1
        }))
    } */

    componentDidMount() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            // 这里最终输出4, 意思是setState会将所有异步操作执行完了之后, 才执行异步回调函数
            console.log(this.state.count)
        })

        this.setState((prev, props) => ({
            count: prev.count + 1
        }))

        this.setState((prev, props) => ({
            count: prev.count + 1
        }))

        this.setState((prev, props) => ({
            count: prev.count + 1
        }))
    }

    render() {
        return (
            <div>
                count: {this.state.count}
            </div>
        )
    }
}
```
