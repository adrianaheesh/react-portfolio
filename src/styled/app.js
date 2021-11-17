import styled from 'styled-components'

export const Body = styled.body`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    & h1, h2 {
        font-family: ivymode, sans-serif;
        font-weight: 600;
        font-style: normal;
        letter-spacing: 1px;
    }   
    & h2 {
        border-bottom: solid 15px #fae2d9;
        line-height: 1.5px;
    } 
    & h3, h4, h5, h6 { 
        font-family: ivymode, sans-serif;
        font-weight: 400;
        font-style: normal;
        letter-spacing: 1px;
    }  
    & p, a {
        font-family: 'Poppins';
    }
    & a:hover, a:focus {
        color: #f1c5b6;
    }
`