import { useState } from 'react'
import { Navbar, Hero, Features } from './components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
    </>
  )
}

export default App
