import styled, { keyframes } from 'styled-components'

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    & a, a:visited {
        color: black;
        text-decoration: none;
    }
    & a:hover {
        color: #f1c5b6;
    }
    & img {
        max-width: 100%;
        @media(min-width: 768px) {
            max-width: 80%;
            align-self: center;
        }
    }
    @media(min-width: 1024px) {
        margin-top: 10px;
        max-width: 70%;
        flex-direction: row;
        justify-content: flex-end;
        gap: 20px;
        background-color: #f7ebe8;
        & img {
            max-width: 50%;
            order: 2;
        }
    }
    `

const blinkCaret = keyframes`
    from,
    to {
        border-color: transparent;
    }
    50% {
        border-color: #3b3b3b;
    }
`

export const Hero = styled.div`
    text-align: right;
    align-self: center;
    margin-top: 15px;
    text-align: center;
    & h1 {
        animation: ${blinkCaret} 1.2s infinite;
        border-right: solid 2px #3b3b3b;
        font-size: 2rem;
        margin: 0;
    }
    @media(min-width: 1024px) {
        width: 50%;
        text-align: right;
    }
`