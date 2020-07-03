import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export default function Nav() {
    return (
        <div className="nav_container">
            <Link to="/">demo5</Link>
            <Link to="/demo6">demo6</Link>
        </div>
    )
}