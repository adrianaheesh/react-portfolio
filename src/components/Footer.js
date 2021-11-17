import React from 'react'
import { StyledFooter, UnorderedList } from '../styled/footer'

const Footer = () => {
    return (
        <StyledFooter>
            <UnorderedList>
                <li>
                    <a href="https://github.com/adrianaheesh" target="_blank" rel="noreferrer">GitHub</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/adrianaheesh/" target="_blank" rel="noreferrer">LinkedIn</a>
                </li>
            </UnorderedList>
        </StyledFooter>
    )
}

export default Footer