import { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App bg-bckg pb-8">
      <Navbar />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
