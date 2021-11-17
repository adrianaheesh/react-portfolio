import styled from 'styled-components'

export const UnorderedList = styled.ul`
    padding-left: 0;
    li {
        list-style-type: none;
        display: inline-block;
    }
    a {
        color: black;
        padding: 0 10px;
    }
`

export const StyledFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
`