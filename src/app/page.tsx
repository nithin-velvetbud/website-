import Header from './components/Header/MyApp'
import Navbar from './components/Navbar/page'
import About from './components/About/page'
import Services from './components/Services/page'
import Footer from './components/Footer/page'
import Contact from './components/Contact/page'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
