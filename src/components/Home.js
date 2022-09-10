import React from 'react'
import { Section, Hero } from '../styled/home'


const Home = () => {
    return (
        <Section>
            <img src="waving-graphic.png" alt="graphic of waving hand" />
            <Hero>
                <h1>Adriana Heesh</h1>
                <p>Junior front-end developer.</p>
            </Hero>
        </Section>
    )
}

export default Home