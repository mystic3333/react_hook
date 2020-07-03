import React from 'react'

export default class Demo1 extends React.Component {
    constructor() {
        super()
    }
 
    onSubmitHandle = (e) => {
        e.preventDefault()
        console.log(this.tokenInput.value)
    }

    render() {
        return (
            <div>
                <form action="" onSubmit={this.onSubmitHandle}>
                    <input type="text" 
                    placeholder="insert word"
                    ref={ input => { this.tokenInput = input }}/>

                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}