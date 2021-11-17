import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, UnorderedList } from '../styled/navigation'

const Navigation = () => {
    return (
        <Nav>
            <UnorderedList>
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
            </UnorderedList>
        </Nav>
    )
}

export default Navigation