import React from 'react'
import { Link } from 'react-router-dom'
import { Section, Hero } from '../styled/home'


const Home = () => {
    return (
        <Section>
            <img src="waving-graphic.png" alt="graphic of waving hand"/>
            <Hero>
                <h1>Adriana Heesh</h1>
                <p>Junior front-end developer.</p>
                <p><Link to='/projects'>See projects >></Link></p>
            </Hero>
        </Section>
    )
}

export default Home