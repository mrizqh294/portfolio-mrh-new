import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";
import Footer from "./pages/Footer";
import Stack from "./pages/Stack";
import Activities from "./pages/Activities";



function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Experience />
        <Stack />
        <Portfolio />
        <Activities />  
        <Contact />
        <Footer />
        
      </main>
    </>
  )
}

export default App

