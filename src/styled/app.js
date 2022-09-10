import styled from 'styled-components'
import { colours } from '../styled/themes'

export const Body = styled.div`
    margin: 0 auto;
    width: 90vw;
    height: 100vh;
    display: flex;
    gap: 10%;
    flex-direction: column;
    align-items: center;
    color: ${colours.darkGrey};
    & h1, h2 {
        font-family: ivymode, sans-serif;
        font-weight: 600;
        font-style: normal;
        letter-spacing: 1px;
        width: 100%;
    }   
    h1 {
        font-size: 2rem;
        text-align: left;
    }
    h1:after {
        content: "";
        display: block;
        width: 100%;
        height: 15px;
        background: #fae2d9;
        position: relative;
        top: -15px;
        z-index: -1;
        opacity: 0.5;
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
        color: ${colours.darkPinkBeige};
    }
`