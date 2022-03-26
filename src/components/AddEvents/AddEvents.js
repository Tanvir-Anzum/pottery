import React from 'react'
import { useForm } from 'react-hook-form'
import Menubar from '../Menubar/Menubar'
import './AddEvents.css'


const AddEvents = () => {
//  const { user } = useAuth()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    // data.email = user?.email;
    fetch('https://whispering-fjord-55786.herokuapp.com/addEvent', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
      .then((data) => console.log(data))
    console.log('hi')
    // console.log(data);
  }
   document.body.style =
     ' background-image: linear-gradient(45deg,#98f5e1,#8eecf5,#b3e5fc,#e3f2fd); background-repeat: no-repeat;height:100vh;'
  return (
    <div className='all'>
      <div className=' w-25 m-auto '>
        <div className='ww d-flex justify-content-center align-items-center'>
          <div className='login-form center'>
            <h1 className='r'> Add Services</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='txt_field'>
                <input
                  // style={{ border: '2px solid black' }}
                  type='text'
                  required
                  // {...register('title')}
                />
                <label>title</label>
              </div>
              <div className='txt_field'>
                <input
                  // style={{ border: '2px solid black' }}
                  type='text'
                  required
                  // {...register('description')}
                />
                <label>description</label>
              </div>
              <div className='txt_field'>
                <input
                  // style={{ border: '2px solid black' }}
                  type='text'
                  required
                  // {...register('image', { required: true })}
                  // placeholder='Image Link'
                />
                <label>description</label>
              </div>
              {errors.exampleRequired && <span>This field is required</span>}

              <input type='submit' value='Add' className='btn btn-info w-50' />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEvents
