import styled from 'styled-components'

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
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
    width: 700px;
    min-height: 700px;
    background: #f7ebe8 url('waving-graphic.png') center bottom no-repeat;
    background-size: contain;
    justify-content: flex-end;
    
    img {
        display: none;
    }
}
`

export const Hero = styled.div`
    align-self: center;
    margin-top: 15px;
    text-align: center;
    @media(min-width: 1024px) {
        margin-top: 0;
        h1 { 
            font-size: 2.5rem;
            margin: 10px 0;
        }
        p {
            margin: 4px 0;
        }
        margin-bottom: 10%;
    }`


