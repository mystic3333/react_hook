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
                {/* <Child time={this.state.time.toString} /> */}
                date: { this.state.time.toString() }
            </div>
        )
    }
}