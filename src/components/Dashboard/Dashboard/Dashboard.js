import React from 'react';
import './Dashboard.css'
import Orders from '../../Orders/Orders'
import { Route, Switch, Link  , useParams, useRouteMatch } from 'react-router-dom'
import Review from '../../Review/Review';
import useFirebase from '../../../hooks/useFirebase';
import AddEvents from '../../AddEvents/AddEvents';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../../ManageProducts/ManageProducts';

const Dashboard = () => {
    let { path, url } = useRouteMatch()
    const { admin, logOut } = useFirebase()
    console.log(admin)
  return (
    <div>
      <nav className='navbar necessary navbar-expand-lg navbar-dark bg-dark fixed-top'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#sidebar'
            aria-controls='offcanvasExample'
          >
            <span
              className='navbar-toggler-icon'
              data-bs-target='#sidebar'
            ></span>
          </button>
          <Link
            className='navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold'
            href='#'
          >
            Frontendfunn
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#topNavBar'
            aria-controls='topNavBar'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='topNavBar'>
            <form className='d-flex ms-auto my-3 my-lg-0'>
              <div className='input-group'>
                <input
                  className='form-control'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                />
                <button className='btn btn-primary' type='submit'>
                  <i className='bi bi-search'></i>
                </button>
              </div>
            </form>
            <ul className='navbar-nav'>
              <li className='nav-item dropdown'>
                <Link
                  className='nav-Link   dropdown-toggle ms-2'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <i className='bi bi-person-fill'></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className='offcanvas offcanvas-start sidebar-nav bg-dark'
        tabindex='-1'
        id='sidebar'
      >
        <div className='offcanvas-body p-0'>
          <nav className='navbar-dark'>
            <ul className='navbar-nav'>
              <li>
                <Link className='nav-Link px-3 active up'>
                  <span className='me-2 up'>
                    <i className='bi bi-speedometer2'></i>
                  </span>
                  <span className='up'>Dashboard</span>
                </Link>
              </li>
              <li className='my-4'>
                <hr className='dropdown-divider bg-light' />
              </li>
              <li>
                <div className='text-muted small fw-bold text-uppercase px-3 mb-3'>
                  Interface
                </div>
              </li>

              <div className='collapse' id='layouts'>
                <ul className='navbar-nav ps-3'>
                  <li>
                    <Link className=' px-3'>
                      <span className='me-2 mt-5'>
                        <i className='bi bi-speedometer2'></i>
                      </span>
                      <span className='mt-5'>Dashboar</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <li id='avk'>
              <Link className='nav-Link text-muted small fw-bold px-3' to='/'>
                <span>
                  <span className='me-2'>
                    <i class='fas fa-house-user'></i>
                  </span>
                  <span>Home</span>
                </span>
              </Link>
              </li>
              {admin && (
                <div>
                  <li>
                  <Link
                    className='nav-Link text-muted small others fw-bold px-3'
                    to={`${url}/makeAdmin`}
                  >
                    <span id='twelve'>
                      <span className='me-2'>
                        {/* <i className='bi bi-book-fill'></i> */}
                        <i class='fas fa-user'></i>
                      </span>
                      <span>Make Admin</span>
                    </span>
                  </Link>
                  </li>
                  <li>
                                      <Link
                    className='nav-Link text-muted small fw-bold px-3'
                    to={`${url}/manageOrders`}
                  >
                    <span>
                      <span className='me-2'>
                        {/* <i className='bi bi-book-fill'></i> */}

                        <i class='fas fa-toolbox'></i>
                      </span>
                      <span>Manage Orders</span>
                    </span>
                  </Link>
                  </li>
                  <li>
                  <Link
                    className='nav-Link text-muted small fw-bold px-3'
                    to={`${url}/manageProducts`}
                  >
                    <span>
                      <span className='me-2'>
                        <i class='fas fa-truck'></i>
                      </span>
                      <span>Manage Products</span>
                    </span>
                  </Link>
                  </li>
                  <li>
                  <Link
                    className='nav-Link text-muted small fw-bold px-3'
                    to={`${url}/addEvents`}
                  >
                    <span>
                      <span className='me-2'>
                        {/* <i className='bi bi-book-fill'></i> */}
                        <i class='fas fa-calendar-plus'></i>
                      </span>
                      <span>Add Events</span>
                    </span>
                  </Link>
                  </li>
                </div>
              )}
              {!admin && (
                <div>
                  <Link
                    className='nav-Link text-muted small fw-bold px-3'
                    to={`${url}/myOrders`}
                  >
                    <span className='me-2'>
                      {/* <i className='bi bi-book-fill'></i> */}
                      <i className='fa-light fa-user'></i>
                    </span>
                    <span>My Orders</span>
                  </Link>
                  <br />
                  <Link
                    className='nav-Link text-muted small fw-bold px-3'
                    to={`${url}/reviews`}
                  >
                    <span className='me-2'>
                      <i className='bi bi-book-fill'></i>
                    </span>
                    <span>Reviews</span>
                  </Link>
                </div>
              )}
              </ul>
            

            <li className='my-4'>
              <hr className='dropdown-divider bg-light' />
            </li>
          </nav>
          <ul>
            <li className='nav-Link px-3'>
              <button className='btn btn-warning' onClick={logOut}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* <li>
                <Link   className='nav-Link   px-3'>
                  <span className='me-2'>
                    <i className='bi bi-graph-up'></i>
                  </span>
                  <span>Charts</span>
                </Link  >
        </li> */}
      <div className='mm'>
        <Switch>
          <Route exact path={path}>
            <h3>Please select Link topic.</h3>
          </Route>
          <Route path={`${path}/addEvents`}>
            <AddEvents></AddEvents>
          </Route>
          <Route path={`${path}/myOrders`}>
            <Orders></Orders>
          </Route>
          <Route path={`${path}/reviews`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </Route>
          <Route path={`${path}/manageOrders`}>
            <Orders></Orders>
          </Route>
        </Switch>
      </div>
      {/* <main className='mt-5 pt-3'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12'>
              <h4>Dashboard</h4>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-3 mb-3'>
              <div className='card bg-primary text-white h-100'>
                <div className='card-body py-5'>Primary Card</div>
                <div className='card-footer d-flex'>
                  View Details
                  <span className='ms-auto'>
                    <i className='bi bi-chevron-right'></i>
                  </span>
                </div>
              </div>
            </div>
            <div className='col-md-3 mb-3'>
              <div className='card bg-warning text-dark h-100'>
                <div className='card-body py-5'>Warning Card</div>
                <div className='card-footer d-flex'>
                  View Details
                  <span className='ms-auto'>
                    <i className='bi bi-chevron-right'></i>
                  </span>
                </div>
              </div>
            </div>
            <div className='col-md-3 mb-3'>
              <div className='card bg-success text-white h-100'>
                <div className='card-body py-5'>Success Card</div>
                <div className='card-footer d-flex'>
                  View Details
                  <span className='ms-auto'>
                    <i className='bi bi-chevron-right'></i>
                  </span>
                </div>
              </div>
            </div>
            <div className='col-md-3 mb-3'>
              <div className='card bg-danger text-white h-100'>
                <div className='card-body py-5'>Danger Card</div>
                <div className='card-footer d-flex'>
                  View Details
                  <span className='ms-auto'>
                    <i className='bi bi-chevron-right'></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 mb-3'>
              <div className='card h-100'>
                <div className='card-header'>
                  <span className='me-2'>
                    <i className='bi bi-bar-chart-fill'></i>
                  </span>
                  AreLink Chart Example
                </div>
                <div className='card-body'>
                  <canvas className='chart' width='400' height='200'></canvas>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-3'>
              <div className='card h-100'>
                <div className='card-header'>
                  <span className='me-2'>
                    <i className='bi bi-bar-chart-fill'></i>
                  </span>
                  AreLink Chart Example
                </div>
                <div className='card-body'>
                  <canvas className='chart' width='400' height='200'></canvas>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 mb-3'>
              <div className='card'>
                <div className='card-header'>
                  <span>
                    <i className='bi bi-table me-2'></i>
                  </span>{' '}
                  DatLink Table
                </div>
                <div className='card-body'></div>
              </div>
            </div>
          </div>
        </div>
      </main> */}
    </div>
  )
};

export default Dashboard;

// import * as React from 'react'
// import PropTypes from 'prop-types'
// import AppBar from '@mui/material/AppBar'
// import Box from '@mui/material/Box'
// import CssBaseline from '@mui/material/CssBaseline'
// import Divider from '@mui/material/Divider'
// import Drawer from '@mui/material/Drawer'
// import IconButton from '@mui/material/IconButton'
// import InboxIcon from '@mui/icons-material/MoveToInbox'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
// import ListItemIcon from '@mui/material/ListItemIcon'
// import ListItemText from '@mui/material/ListItemText'
// import MailIcon from '@mui/icons-material/Mail'
// import MenuIcon from '@mui/icons-material/Menu'
// import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link  ,
//   useParams,
//   useRouteMatch,
// } from 'react-router-dom'
// import { Button } from '@mui/material'


// import { MarkEmailReadOutlined } from '@mui/icons-material'
// import useFirebase from '../../../hooks/useFirebase'
// import Orders from '../../Orders/Orders'

// import Review from '../../Review/Review.js'


// const drawerWidth = 200
// function Dashboard(props) {
//   const { window } = props
//   const [mobileOpen, setMobileOpen] = React.useState(false)
//   let { path, url } = useRouteMatch()

//   const { admin, logOut } = useFirebase()
//   console.log(admin)
//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen)
//   }

//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />

//       <Link   to='/'>
//         <Button color='inherit'>Home</Button>
//       </Link  >
//       <br />
//       {!admin && (
//         <Box>
//           {/* <Link   to={`${url}`}>
//             <Button color='inherit'>Dashboard</Button>
//           </Link  > */}
//           <Link   to={`${url}/pay`}>
//             <Button color='inherit'>Pay</Button>
//           </Link  >
//           <br />
//           <Link   to={`${url}/myOrders`}>
//             <Button color='inherit'>My Orders</Button>
//           </Link  >
//           <br />
//           <Link   to={`${url}/review`}>
//             <Button color='inherit'>Review</Button>
//           </Link  >
//         </Box>
//       )}

//       {admin && (
//         <Box>
//           <Link   to={`${url}/manageAllOrders`}>
//             <Button color='inherit'>Manage All Orders</Button>
//           </Link  >
//           <Link   to={`${url}/addaProduct`}>
//             <Button color='inherit'>Add Link  Product</Button>
//           </Link  >
//           <Link   to={`${url}/makeAdmin`}>
//             <Button color='inherit'>Make Admin</Button>
//           </Link  >
//           <Link   to={`${url}/manageProducts`}>
//             <Button color='inherit'>Manage Products</Button>
//           </Link  >
//         </Box>
//       )}
//       <button className='nav-item btn btn-primary p-1 ' onClick={logOut}>
//         Logout
//       </button>
//     </div>
//   )

//   const container =
//     window !== undefined ? () => window().document.body : undefined

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position='fixed'
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color='inherit'
//             aria-label='open drawer'
//             edge='start'
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant='h6' noWrap component='div'>
//             Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Box
//         component='nav'
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label='mailbox folders'
//       >
//         <Drawer
//           container={container}
//           variant='temporary'
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': {
//               boxSizing: 'border-box',
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant='permanent'
//           sx={{
//             display: { xs: 'none', sm: 'block' },
//             '& .MuiDrawer-paper': {
//               boxSizing: 'border-box',
//               width: drawerWidth,
//             },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box
//         component='main'
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//         }}
//       >
//         <Toolbar />
//         <Switch>
//           {/* <Route exact path={path}>
//             <DashboardHome></DashboardHome>
//           </Route> */}
//           <Route path={`${path}/myOrders`}>
//             <Orders></Orders>
//           </Route>

         
//           <Route path={`${path}/review`}>
//             <Review></Review>
//           </Route>
         
//         </Switch>
//       </Box>
//     </Box>
//   )
// }

// Dashboard.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// }

// export default Dashboard