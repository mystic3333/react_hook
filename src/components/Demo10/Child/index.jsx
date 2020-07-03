import React from 'react'

 class Child extends React.Component {
    render() {
        console.log('child render')
        return (
            <div>
                child time: {this.props.time}
            </div>
        )
    }
}

export default React.memo(Child)