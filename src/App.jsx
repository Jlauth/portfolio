import React, { useState } from 'react';
import { Header } from './components/header/Header.jsx';
import { Nav } from './components/nav/Nav.jsx';
import { About } from './components/about/About.jsx';
import { Experience } from './components/experience/Experience.jsx';
import { Portfolio } from './components/portfolio/Portfolio.jsx';
import { Contact } from './components/contact/Contact.jsx';
import { Footer } from './components/footer/Footer.jsx';
import { Ap1 } from './components/portfolio/Ap1.jsx'
import { Ap3 } from './components/portfolio/Ap3.jsx'
import { Stage } from './components/portfolio/Stage.jsx'

const App = () => {
  const [showAp1, setShowAp1] = useState(false)
  const [showAp3, setShowAp3] = useState(false)
  const [showStage, setShowStage] = useState(false)

  const scrollToElement = (ref, setShowState, showState) => {
    setShowState(!showState)
    if (!showState) {
      const rect = ref.current.getBoundingClientRect()
      const scrollY = window.scrollY + rect.top + 1000
      window.scrollTo({ top: scrollY, behavior: 'smooth' })
    }
  }

  const toggleAp1 = (ref) => {
    scrollToElement(ref, setShowAp1, showAp1)
  }

  const toggleAp3 = (ref) => {
    scrollToElement(ref, setShowAp3, showAp3)
  }

  const toggleStage = (ref) => {
    scrollToElement(ref, setShowStage, showStage)
  }

  const closeDetail = () => {
    setShowAp1(false)
    setShowAp3(false)
    setShowStage(false)
  }

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio onAp1Click={toggleAp1} onAp3Click={toggleAp3} onStageClick={toggleStage} />
      {showAp1 && <Ap1 onClose={closeDetail} />}
      {showAp3 && <Ap3 onClose={closeDetail} />}
      {showStage && <Stage onClose={closeDetail} />}
      <Contact />
      <Footer />
    </>
  )
}

export default App;
