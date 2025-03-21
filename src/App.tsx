
import './App.css'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Header from './sections/Header/Header'
import { Outlet } from 'react-router-dom'
function App() {


  return (
    <>
    <Header />
    {/* <Hero />
    <Projects />
    <Skills />
   
    <Contact /> */}
    <Outlet />
    <Footer/>
    </>
  )
}

export default App
