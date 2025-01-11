import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Team from './components/Team'
import Donation from './components/Donation'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Team />
        <Donation />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

