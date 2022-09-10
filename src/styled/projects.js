import styled from 'styled-components'

export const PageContainer = styled.div`
    @media(min-width: 1024px) {
        width: 800px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const Card = styled.div`
    width: 100%;
    ${props => (props.id % 2 === 0) ?
        `background-color: rgb(250, 226, 217, 0.5); 
        img {
            border: solid 5px #ffffff;
        }`
        :
        `background-color: #fafafa; 
        img {
            border: solid 5px rgb(250, 226, 217, 0.5);
        }`
    };

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
        height: 200px;
        object-fit: contain;
        background: #ffffff;
        padding: 10px;
    }
    p {
        padding: 0 20px;
    }
    h3 {
        margin: 10px;
    }

    // desktop adjustments
    @media(min-width: 1024px) {
        box-sizing: border-box;
        padding: 30px;
        width: 100%;
        margin: 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 0.5fr;
        column-gap: 10px;
        h3 {
            grid-column: 1 / span 3;
            margin-bottom: 10px;
        }
        a {
            grid-row: second-line / 3;
            grid-column: ${props => (props.id % 2 === 0) ? "3 / span 1" : "1 / span 1"};
        }
        div {
            grid-column: ${props => (props.id % 2 === 0) ? "1 / span 2" : "2 / span 2"};
            grid-row: second-line / 3;
            text-align: ${props => props.id % 2 === 0 ? "right" : "left"};
        }
    }
`