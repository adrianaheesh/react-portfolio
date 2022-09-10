import React from 'react'
import { AboutPageContainer, AboutSection, SkillsSection, StyledIcons } from '../styled/about'

const About = () => {
    return (
        <AboutPageContainer>
            <AboutSection>
                <h1>Welcome!</h1>
                <div>
                    <img src="adriana-profile-pic-1.png" alt="adriana" />
                    <p>
                        With a degree in marketing, a diploma in Information Technology and experience in developing full-stack web applications, managing e-commerce and social media, I have skills in programming, graphic design, user experience and subsequently have a passion for communicative and collaborative front-end projects. I seek work that challenges my skill and gets me thinking in new ways with a sense of mentorship and camaraderie with my colleagues. I love the opportunity to learn from and teach others - something I look forward to continuing throughout my career in tech.
                        <br />
                        <br />
                        Down-time favourites include quality time with my family, and reading with a coffee in hand.
                    </p>
                </div>
            </AboutSection>
            <SkillsSection>
                <h3>Skills</h3>
                <StyledIcons>
                    <i class="devicon-react-original-wordmark"></i>
                    <i class="devicon-javascript-plain"></i>
                    <i class="devicon-html5-plain-wordmark"></i>
                    <i class="devicon-css3-plain-wordmark"></i>
                    <i class="devicon-ruby-plain-wordmark"></i>
                    <i class="devicon-rails-plain-wordmark"></i>
                    <i class="devicon-figma-plain"></i>
                </StyledIcons>
                <p>See Adriana's <a href="AdrianaHeesh-Resume.pdf" target="_blank">resume</a></p>
            </SkillsSection>
        </AboutPageContainer>
    )
}

export default About