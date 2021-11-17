import styled from 'styled-components'

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: row;
    align-items: center;
    font-size: 16px;
    & a {
        text-decoration: none;
        color: #3b3b3b;
        padding: 15px;
    }
    border-bottom: solid 3px transparent;
    @media(min-width: 768px) {
        font-size: 16px;
    }
    @media(min-width: 1024px) {
        font-size: 16px;
    }
`

export const UnorderedList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
        float: left;
    }
    
    li a {
        display: block;
    }
`

