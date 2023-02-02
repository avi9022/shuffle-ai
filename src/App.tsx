import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/NavBar/Navbar'
import { Services } from './components/Services/Services'

function App() {
  return (
    <>
      <div className="heading-container">
        <Navbar />
        <Hero />
      </div>
      <Services />
    </>
  )
}

export default App
