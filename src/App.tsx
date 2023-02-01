import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/NavBar/Navbar'

function App() {
  return (
    <>
      <div className="heading-container">
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App
