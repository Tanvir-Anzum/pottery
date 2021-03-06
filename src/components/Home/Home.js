import React, { useEffect, useState } from 'react'
import bannerOne from '../Images/bannerOne.jpg'
import tourism from '../Images/tourism.jpg'
import bgTwo from '../Images/bgTwo.jpg'
import reviewerOne from '../Images/reviewerOne.png'
import reviewerTwo from '../Images/reviewerTwo.png'
import reviewerThree from '../Images/reviewerThree.png'
import potterFour from '../Images/potteryFour.jpg'
import './Home.css'
import Menubar from '../Menubar/Menubar'
import Footer from '../Footer/Footer'
import Placed from '../Placed/Placed'

//import Footer from '../Footer/Footer'

  const potteryBanner = {
    background: `url(${bgTwo})`,
    marginBottom: 100,
  }
    
const Home = () => {
  const [event, setEvent] = useState([])
  const [review, setReview] = useState([])

  useEffect(() => {
    fetch('https://whispering-fjord-55786.herokuapp.com/allEvents')
      .then((res) => res.json())
      .then((data) => setEvent(data))
  }, [])
 useEffect(() => {
   fetch('https://whispering-fjord-55786.herokuapp.com/reviews')
     .then((res) => res.json())
     .then((data) => setReview(data))
 }, [])
 document.body.style = ' background-color: white;'
  
  return (
    <div className=' mb-5'>
      <Menubar></Menubar>
      <div
        style={potteryBanner}
        className='d-flex justify-content-center row background'
      >
        <div className='col-sm-12 col-md-12 mt-3 mb-5 '>
          <h1>Begin Your Journey With Us</h1>
          <p id='z'>
            We are providing high quality service with low cost.We are commited
            to provide you the best service.
          </p>
          {/* <button className='btn btn-primary'>Learn More</button> */}
        </div>
        <div className='d-flex mt-5'>
          <div className='col-sm-12 col-md-6'>
            <img
              style={{ marginBottom: '-60px' }}
              className='bannerOne'
              src={bannerOne}
              alt=''
            />
          </div>
          <div className='col-sm-12 col-md-6'>
            <img
              style={{ marginBottom: '-60px' }}
              className='bannerOne'
              src={potterFour}
              alt=''
            />
          </div>
        </div>
      </div>

      <h3 className='color mt-5 pt-3 mb-5'>Our Services</h3>
      <div className='row'>
        {event.slice(0, 6).map((user) => (
          <div className='users col-sm-12 col-md-6 mb-3'>
            <Placed ser={user}></Placed>
          </div>
        ))}
      </div>
      <div id='bottom' className='mb-5 pb-5 pt-5 '>
        <h3 className='color d-flex justify-content-center'>Customers Say</h3>
        <div className='d-flex justify-content-center'>
          <h1 className='w-75 pb-3'>What Our Customers Say About Us</h1>
        </div>
        <div className='container'>
          <div className='row row-cols-sm-1 row-cols-md-3'>
            {/* <div id='lower-space' className='box col '> */}
            <div className='d-flex justify-content-center '>
              <div id='first' className='pt-5 col pb-5 b'>
                <img id='one' src={reviewerOne} alt='' />
                <div>
                  <h5>Customer</h5>
                  <div className='d-flex justify-content-center'>
                    <p className='w-75 par'>
                      I love travelling the most to be honest.I want to see the
                      world.EarthTrip has really done a great job in this
                      regarf.I hope they do better.I have best wishes for them.
                    </p>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='box col'> */}
            <div id='second' className='pt-5 col pb-5 b'>
              <img id='two' src={reviewerTwo} alt='' />
              <div>
                <h5>Customer</h5>
                <div className='d-flex justify-content-center'>
                  <p className='w-75'>
                    EarthTrip made my dream come true.I want to see my country
                    more closely.Their service is also great.They are really
                    dedicated,I must say.
                  </p>
                  {/* </div> */}
                </div>
              </div>
            </div>
            {/* <div className='box col'> */}
            <div id='third' className='pt-5 pb-5 col '>
              <img id='three' src={reviewerThree} alt='' />
              <div>
                <h5>Customer</h5>
                <div className='d-flex justify-content-center'>
                  <p className='w-75'>
                    I had passions for travelling from an early age.EarthTrip
                    really helped me a lot to make it true.I thank them from the
                    core of my heart for their services.
                  </p>
                  {/* </div> */}
                </div>
              </div>
            </div>
            <div style={{ marginLeft: '350px' }}>
              <h1 className='mt-5 mb-3 color'>Reviews</h1>
            </div>
            {/* <h1>{review}</h1> */}
            {review.map((rev) => (
              <div className='text-start col-md-12'>
                <h6>{rev.reviewer}</h6>
                <h6 className='text-muted'>{rev.comment}</h6>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Home
