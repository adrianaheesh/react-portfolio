import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import { Body } from '../styled/app'

const App = () => {
  return (
    <Body>

      <Router>
        <Navigation />

        <Switch>
            <Route path="/about" component={About}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/" component={Home}/>
        </Switch>
      </Router>

      <Footer />
    </Body>
  )
}

export default App