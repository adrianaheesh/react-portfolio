import styled from 'styled-components'

export const Card = styled.div`
    width: 100%;
    background-color: ${props => (props.backgroundColour % 2 === 0) ? "#fae2d9" : "#fafafa"};
    padding: 0 20px;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    a, a:active, a:focus {
        color: #3b3b3b;
    }
    img:hover {
        filter: none;
        border: none;
    }
    img {
        max-width: 400px;
        margin: auto;
        height: 300px;
        object-fit: cover;
        box-shadow: 0 4px 8px #f7ebe8;
        filter: grayscale(100%);
        border-radius: 6px;
    }
    p {
        padding: 0 20px;
    }
    h3 {
        margin: 10px;
    }
`