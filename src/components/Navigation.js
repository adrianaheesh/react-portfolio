import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from '../styled/navigation'

const Navigation = () => {
    return (
        <Nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </Nav>
    )
}

export default Navigation