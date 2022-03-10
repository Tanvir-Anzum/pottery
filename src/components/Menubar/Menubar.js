import React from 'react'
import { Link } from 'react-router-dom'
import './Menubar.css'
import useFirebase from '../../hooks/useFirebase'

const Menubar = () => {
   const { user, logOut } = useFirebase()
  return (
    <div className='container-fluid mt'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark mb-3 '>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              
              <li className='nav-item p-2 nav-link active'>
                <Link className='nav-link p-2' to='/'>
                  Home
                </Link>
              </li>  

              <li className='nav-item p-2 nav-link active'>
                <Link className='nav-link p-2' to='/addEvent'>
                  Add A New Service
                </Link>
              </li>
              {user?.email ? (
                <div>
                  <Link to='/dashboard'>
                    <button className='items btn btn-info p-1 '>
                      Dashboard
                    </button>
                  </Link>
                  <button
                    className='nav-item btn btn-warning p-1 '
                    onClick={logOut}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link to='/login'>
                  <button className='items btn btn-info p-1 '>Login</button>
                </Link>
              )}
              <Link className='nav-item p-2' to='/admin'>
                <li className=''>{user?.email}</li>
              </Link>
            </ul>
            <form className='d-flex'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Menubar
