import { useState } from 'react'
import './App.css'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import Contact from './components/Contact.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <About />
      <Contact />
    </>
  )
}

export default App
