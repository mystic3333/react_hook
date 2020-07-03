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