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
                    <p>Adriana's skills in graphic design, communications and user experience stem from her previous work experience in eCommerce and digital marketing, as well as her Marketing degree. She thoroughly enjoys working on front-end projects to utilise these skills. Working on group projects has been a highlight of her studies as she loves the opportunity to learn from and teach others - something she looks forward to continuing throughout her career in tech.
                    <br/>
                    <br/>
                    Adriana spends her down-time with her family, including both fur babies and non-fur baby (and a large collection of plant babies). She loves to read with a coffee in hand when she's lucky enough to get a moment to herself.
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