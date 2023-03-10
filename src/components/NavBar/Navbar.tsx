import { FunctionComponent, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../../assets/images/logo.svg'
import './Navbar.css'

export const Navbar: FunctionComponent = () => {
  const navigate = useNavigate()
  const navRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (!navRef.current) return
    window.onscroll = () => {
      if (window.pageYOffset >= 115) {
        navRef.current!.classList.add('nav-full')
      } else {
        navRef.current!.classList.remove('nav-full')
      }
    }
  }, [navRef.current])

  return (
    <div className="top-nav ps-3 text-white fixed-top pt-4" ref={navRef}>
      <div className="d-flex gap-3 gap-md-5 align-items-center pb-2">
        <div className="d-inline logo">
          <button className="bg-transparent border-0" onClick={() => navigate('/')}>
            <img src={img} alt="" width={150} />
          </button>
        </div>
        <nav className="d-flex gap-4 m-0">
          <button className="bg-transparent border-0 text-white" onClick={() => navigate('/')}>
            Home
          </button>
          <button className="bg-transparent border-0 text-white" onClick={() => navigate('/generator')}>
            Shuffle generator
          </button>
        </nav>
      </div>
    </div>
  )
}
