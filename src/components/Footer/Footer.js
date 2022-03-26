
import React from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarker,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import blog from '../Images/blog.jpg'
import blog2 from '../Images/blog2.jpg'
import './Footer.css'

const Footer = () => {
  return (
    <div className='margin'>
      <footer id='footer'>
        <div className='row'>
          <div className='col-md-3 '>
            <h4 className='mt-3 justify'>Blogs</h4>
            <div className='separator'></div>
            <p className='width q'>
              Lorem ipsum dolor sit amet consr adiping elit. Facere ullam,
              nostrum error tempo alias tempora commodi dolorem
            </p>
            <ul className='mar-top'>
              <li>
                <div className='d-flex align-items-center'>
                  <span className='pe-3'>
                    <i className='fa fa-map-marker w'></i>
                    {/* <FontAwesomeIcon icon='fa-solid fa-address-book' /> */}
                    {/* <i class='fa fa-address-book' aria-hidden='true'></i> */}
                    
                  </span>
                  <a className='ms-2 width' href='https://www.youtube.com'>
                    00456 Some Address line
                  </a>
                </div>
              </li>
              <li>
                <div className='d-flex align-items-center'>
                  <span className='pe-3'>
                    <i className='fa fa-envelope fa-sm w'></i>
                  </span>
                  <a className='ms-2 width' href='https://www.youtube.com'>
                    me@gmail.com
                  </a>
                </div>
              </li>
              <li>
                <div className='d-flex align-items-center'>
                  <span className='pe-3'>
                    <i className='fa fa-phone w'></i>
                  </span>
                  <a className='ms-2 width' href='https://www.youtube.com'>
                    880123456789
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className='col-md-3'>
            <h4 className='mt-3 justify'>Quick Links</h4>
            <div className='separator'></div>
            <ul className='a'>
              <li>
                <div className='d-flex align-items-center'>
                  <span className='custom'></span>
                  <Link className='ms-2 width'>Home</Link>
                </div>
              </li>

              <li>
                <div className='d-flex align-items-center'>
                  <span className='custom'></span>
                  <a className='ms-2 width' href=''>
                    Listing
                  </a>
                </div>
              </li>
              <li>
                <div className='d-flex align-items-center'>
                  <span className='custom'></span>
                  <a className='ms-2 width' href=''>
                    Agencies
                  </a>
                </div>
              </li>

              <li>
                <div className='d-flex align-items-center'>
                  <span className='custom'></span>
                  <a className='ms-2 width' href=''>
                    Services
                  </a>
                </div>
              </li>
              <li>
                <div className='d-flex align-items-center'>
                  <span className='custom'></span>
                  <a className='ms-2 width' href=''>
                    About
                  </a>
                </div>
              </li>
              <li>
                <div className='d-flex align-items-center'>
                  <span className='custom'></span>
                  <a className='ms-2 width' href=''>
                    Contact Us
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className='col-md-3'>
            <h4 className='mt-3 justify'>Useful Links</h4>
            <div className='separator'></div>
            <div className='d-flex'>
              <div>
                <img src={blog} id='img' alt='' />
              </div>
              <div className='width'>Lorem ipsum dolor sit amet.</div>
            </div>
            <br />
            <div className='d-flex'>
              <div>
                <img src={blog2} id='img' alt='' />
              </div>
              <div className='width'>Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
          <div className='col-md-3'>
            <h4 className='mt-3 justify'>NEWSLETTER</h4>
            <div className='separator'></div>
            <p className='width' id='q'>
              Lorem ipsum dolor sit amet consr adiping elit. Facere ullam,
              nostrum error tempo alias tempora commodi dolorem
            </p>
            <form action='' className='news'>
              <input
                type='email'
                name=''
                id=''
                className='form-control'
                placeholder='enter your email'
              />
            </form>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
