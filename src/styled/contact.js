import styled from 'styled-components'

export const StyledDiv = styled.div`
    margin: 0 auto;
    text-align: center;
    width: 80%;
    @media(min-width: 1024px) {
        width: 800px;
        padding: 15px;
    }
`
    
export const StyledForm = styled.form`
    font-family: 'Poppins', sans-serif;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 10px;
    & input {
        width: 100%;
        font-family: 'Poppins', sans-serif;
        border: none;
        box-shadow: 1px 1px 10px #d9d9d9;
        margin-bottom: 15px;
        border-radius: 15px;
        padding: 10px;
    }
    & textarea {
        wrap: hard;
        resize: none;
        width: 100%;
        height: 150px;
        font-family: 'Poppins', sans-serif;
        border: none;
        border-radius: 15px;
        padding: 10px;
        box-shadow: 1px 1px 10px #d9d9d9;
        margin-bottom: 15px;
    }
    & input:focus, textarea:focus {
        outline: none;
    }
    @media(min-width: 1024px) {
        width: 40%;
    }
`

export const Button = styled.button`
    width: 40%;
    background-color: #fae2d9;
    font-style: bold;
    padding: 10px;
    font-family: 'Poppins', sans-serif;
    border-radius: 15px;
    border: none;
    box-shadow: 1px 1px 10px #d9d9d9;
    :hover {
        background-color: #f7ebe8;
    }
    :active {
        box-shadow: 0px 0px 10px #d9d9d9;
    }
`