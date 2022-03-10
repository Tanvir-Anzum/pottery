import {
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from '@mui/material'
import login from '../Images/login.svg'
import lo from '../Images/lo.webp'
import log from '../Images/log.jpg'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import './Login.css'
import Menubar from '../Menubar/Menubar'
import useFirebase from '../../hooks/useFirebase'

const Login = () => {
  const [loginData, setLoginData] = useState({})

  const location = useLocation()
  const history = useHistory()
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useFirebase()

  const handleOnChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    const newLoginData = { ...loginData }
    newLoginData[field] = value
    setLoginData(newLoginData)
  }
  const handleLoginSubmit = (e) => {
   loginUser(loginData.email, loginData.password, location, history)
    e.preventDefault()
  }

  const handleGoogleSignIn = () => {
     signInWithGoogle(location, history)
  }
  console.log(user)
  return (
    <div>
      <Menubar></Menubar>
      <div className='row'>
        <h3 className='head mt-0'>Welcome</h3>
        <div className='col cols-6'>
          <img id='log' src={lo} alt='' />
        </div>
        <div className='col cols-6'>
          <Grid container spacing={2}>
            <Grid item sx={{ mt: 8, mb: 8 }} xs={12} md={12}>
              <Typography variant='body1' gutterBottom>
                Login
              </Typography>
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  sx={{ width: '75%', m: 1 }}
                  id='standard-basic'
                  label='Your Email'
                  name='email'
                  onChange={handleOnChange}
                  variant='standard'
                />
                <TextField
                  sx={{ width: '75%', m: 1 }}
                  id='standard-basic'
                  label='Your Password'
                  type='password'
                  name='password'
                  onChange={handleOnChange}
                  variant='standard'
                />

                <Button
                  sx={{ width: '75%', m: 1 }}
                  type='submit'
                  variant='contained'
                >
                  Login
                </Button>
              </form>
              <NavLink style={{ textDecoration: 'none' }} to='/register'>
                <Button variant='text'>New User? Please Register</Button>
              </NavLink>
              {/* {isLoading && <CircularProgress />}
          {user?.email && <Alert severity='success'>Login successfully!</Alert>}
          {authError && <Alert severity='error'>{authError}</Alert>} */}

              <p>------------------------</p>

              <Button onClick={handleGoogleSignIn} variant='contained'>
                Google Sign In
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Login
