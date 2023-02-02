import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import { Navbar } from './components/NavBar/Navbar'
import { Generator } from './pages/Generator/Generator'
import { Home } from './pages/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/generator/:type" element={<Generator />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
