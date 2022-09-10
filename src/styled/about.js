import styled from 'styled-components'

// whole page container
export const AboutPageContainer = styled.div`
    text-align: center;
    width: 100%;
    max-width: 800px;
    padding: 10px;
    & img {
        width: 300px;
        height: 300px;
        object-fit: cover;
        object-position: 80%;
        border-radius: 50%;
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
            img {
                float: left;
                shape-outside: circle(50%);
                margin-right: 15px;
            }
            p {
                text-align: justify;
            }
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