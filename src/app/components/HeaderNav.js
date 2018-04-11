import React from 'react'
import {Link} from 'react-router-dom'

export const HeaderNav = () => {
    return (
        <ul className="right hide-on-med-and-down">
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/authors">Authors</Link></li>
            <li> <Link to="/about">About</Link></li>
        </ul>
    )
}