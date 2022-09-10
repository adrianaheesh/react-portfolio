import styled from 'styled-components'

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    height: 100vh;

    & img {
        max-width: 100%;
        @media(min-width: 768px) {
            max-width: 80%;
            align-self: center;
        }
    }

    & h1, h2 {
        font-family: ivymode, sans-serif;
        font-weight: 600;
        font-style: normal;
        letter-spacing: 1px;
        width: 100%;
    }  
    p {
        font-family: "Poppins", sans-serif;
    } 
    @media(min-width: 768px) {
        padding-bottom: 40px;
    }

    @media(min-width: 1024px) {
    width: 800px;
    min-height: 700px;
    background: #f7ebe8 url('waving-graphic.png') center bottom no-repeat;
    background-size: contain;
    justify-content: flex-end;
    flex-grow: 1;
    margin-top: 0;
    
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


