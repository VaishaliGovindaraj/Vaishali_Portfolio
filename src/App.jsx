import { useEffect, useState } from 'react'
import './App.css'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import emailjs from "@emailjs/browser";

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
      setIsLoaded(true);
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  },[])

  return (
      <div className={`app ${isLoaded ? "loaded" : ""}`}>
          <Navbar />
          <Hero />
          <Projects />
          <Contact />

          <>
            <p> &copy; 2025. All rights reserved </p>
          </>
      </div>
  )
}

export default App
