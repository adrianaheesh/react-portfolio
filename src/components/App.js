import React from 'react'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import { Body } from '../styled/app'

const App = () => {
  return (
    <Body>

      <Home />
      <Projects />
      <About />
      <Contact />

      <Footer />
    </Body>
  )
}

export default App