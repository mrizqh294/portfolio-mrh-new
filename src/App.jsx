import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Footer from "./pages/Footer";



function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App

