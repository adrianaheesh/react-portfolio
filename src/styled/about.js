import styled from 'styled-components'

// whole page container
export const AboutPageContainer = styled.div`
    text-align: center;
    max-width: 100%;
    padding: 10px;
    & img {
        width: 300px;
        height: 300px;
        object-fit: cover;
        object-position: 80%;
    }
`

// container with img and p text
export const AboutSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
    & div {
        @media(min-width: 1024px) {
            display: grid;
            grid-template-columns: 1fr 3fr;
            column-gap: 15px;
        }
    }
`

// container with skill icons
export const SkillsSection = styled.div`
    text-align: center;
    & i {
        font-size: 3rem;
        padding: 10px;
        color: #f1c5b6;
    }
    & a {
        color: black;
    }
`

export const StyledIcons = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`