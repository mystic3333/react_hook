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