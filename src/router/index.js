import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import routes from './routes'
import Nav from '../components/Nav'

export default class MyRouter extends React.Component {
    render() {
        return (
            <Router routes={routes}>
                 <Nav/>
                {routes}
            </Router>
        )
    }
}