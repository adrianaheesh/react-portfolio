import React from 'react'
import { AboutPageContainer, AboutSection, SkillsSection, StyledIcons } from '../styled/about'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <AboutPageContainer>
            <AboutSection>
                <h2>Welcome!</h2>
                <div>
                    <img src="adriana-profile-pic.jpg" alt="adriana"/>
                    <p>My skills in graphic design, communications and user experience stem from my previous experience in eCommerce and digital marketing, as well as my Marketing degree. I thoroughly enjoy working on front-end applications to utilise these skills. Working on group projects has been a highlight of my studies as I love the opportunity to learn from and teach others - something I look forward to continuing throughout my career in tech.
                    <br/>
                    <br/>
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
                    <i class="devicon-postgresql-plain-wordmark"></i>
                    <i class="devicon-photoshop-plain"></i>
                    <i class="devicon-illustrator-plain"></i>
                    <i class="devicon-xd-plain"></i>
                </StyledIcons>
                <p>See Adriana's <a href="AdrianaHeesh-Resume.pdf" target="_blank">resume</a></p>
                <p>Get in <Link to="/contact">touch</Link></p>
            </SkillsSection>
        </AboutPageContainer>
    )
}

export default About