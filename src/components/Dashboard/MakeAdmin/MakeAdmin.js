import { Button, TextField, Alert } from '@mui/material'
import React, { useState } from 'react'
// import useAuth from '../../../hooks/useAuth'
import useFirebase from '../../../hooks/useFirebase'
import './MakeAdmin.css'

const MakeAdmin = () => {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const { token } = useFirebase()

  const handleOnBlur = (e) => {
    setEmail(e.target.value)
  }
  const handleAdminSubmit = (e) => {
    const user = { email }
    fetch('http://whispering-fjord-55786.herokuapp.com/users/admin', {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${token}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data)
          setSuccess(true)
        }
      })

    e.preventDefault()
  }
 
  return (
    <div>
      <div className='upper'>
        <div className=''> 
        <h2>Make an Admin</h2>
        </div>
      </div>
      <div className=''>
        <form onSubmit={handleAdminSubmit}>
          <TextField
            sx={{ width: '50%' }}
            label='Email'
            type='email'
            onBlur={handleOnBlur}
            variant='standard'
          />
          <Button type='submit' variant='contained'>
            Make Admin
          </Button>
        </form>
        {success && <Alert severity='success'>Made Admin successfully!</Alert>}
      </div>
    </div>
  )
}

export default MakeAdmin
