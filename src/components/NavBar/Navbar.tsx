import { FunctionComponent } from 'react'
import './Navbar.css'
import img from '../../assets/images/logo.svg'
import { useNavigate } from 'react-router-dom'

export const Navbar: FunctionComponent = () => {
  const navigate = useNavigate()
  return (
    <div className="top-nav ps-3 text-white fixed-top ">
      <div className="row align-items-center pb-2">
        <div className="d-inline col-3 col-lg-1 logo p-4">
          <button className="bg-transparent border-0" onClick={() => navigate('/')}>
            <img src={img} alt="" width={150} />
          </button>
        </div>
        <nav className="col-9 col-lg-11">
          <ul className="d-flex gap-4 m-0 w-100">
            <li className="list-group-item pointer active">Home</li>
            <li className="list-group-item pointer">Shuffle generator</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
