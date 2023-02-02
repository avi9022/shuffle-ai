import { FunctionComponent } from 'react'
import './Navbar.css'
import img from '../../assets/images/logo.svg'

export const Navbar: FunctionComponent = () => {
  return (
    <div className="top-nav ps-3 text-white fixed-top">
      <div className="row align-items-center">
        <div className="d-inline col-3 col-lg-1 logo p-4">
          <img src={img} alt="" width={150} />
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
