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
//                 count: {`you click ${this.state.count} times`}
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
        document.title=`you click ${count} times`
        console.log('executed')
    }, [count, name])

    return(
        <div>
            count: {` you click ${count} times `}
            name: { name }
            <button onClick={ () => {setCount(count + 1)} }>add count</button>
            <button onClick={ () => { setName('xxx') } }>change name</button>
        </div>
    )
}

export default Demo8