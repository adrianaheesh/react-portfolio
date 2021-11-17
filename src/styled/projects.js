import styled from 'styled-components'

export const Card = styled.div`
    width: 100%;
    background-color: ${props => (props.id % 2 === 0) ? "#fafafa" : "#fae2d9"};
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
    img {
        max-width: 300px;
        margin: auto;
        height: 300px;
        object-fit: cover;
        box-shadow: 0 4px 8px #3b3b3b;
        filter: grayscale(100%);
        border-radius: 6px;
    }
    img:hover {
        filter: none;
        border: none;
    }
    p {
        padding: 0 20px;
    }
    h3 {
        margin: 10px;
    }

    // desktop adjustments
    @media(min-width: 1024px) {
        padding: 40px;
        width: 800px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 0.5fr;
        column-gap: 10px;
        h3 {
            grid-column: 1 / span 3;
        }
        a {
            grid-row: second-line / 3;
            grid-column: ${props => (props.id % 2 === 0) ? "3 / span 1" : "1 / span 1"};
            // justify-self: ${props => props.id % 2 === 0 ? "start" : "end" };
        }
        div {
            grid-column: ${props => (props.id % 2 === 0) ? "1 / span 2" : "2 / span 2"};
            grid-row: second-line / 3;
            text-align: ${props => props.id % 2 === 0 ? "right" : "left"};
        }
    }
`