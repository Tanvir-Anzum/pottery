import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import Menubar from '../Menubar/Menubar'
import './Orders.css'
const Orders = () => {
  const [order, setOrder] = useState([])

  const [control, setControl] = useState(false)

  useEffect(() => {
    fetch('https://whispering-fjord-55786.herokuapp.com/orders')
      //  fetch('https://localhost:5000/orders')
      .then((res) => res.json())
      .then((data) => setOrder(data))
  }, [control])

  //  // const response = confirm('are you sure to proceed?')
  const handleDeleteUser = (id) => {
    // const confirmBox = window.confirm('Are you sure you want to delete?')
    // if (confirmBox === true) {
    fetch(`https://whispering-fjord-55786.herokuapp.com/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          console.log(data.deletedCount)
          // setControl(!control)
          const remains = order.filter((ord) => ord._id != id)
          setOrder(remains)
        } else {
          console.log(data.deletedCount)
          // setControl(false)
        }
      })
  }
  
document.body.style = ' background-color: white;'
  return (
    <div className='container '>
      <p className='mt-5 mb-3 texts text-muted'>Orders</p>
      <div className='d-flex justify-content-center'>
        <Table border='0' cellpadding='0' cellspacing='0' className=''>
          <thead>
            <tr>
              {/* <th>#</th> */}
              {/* <th>Service id</th> */}
              <th id='tanvir' className=' small'>
                Service Name
              </th>
              <th className=' small'>User Name</th>
              <th className=' small'>User Email</th>
              <th className='small'>City</th>
              {/* <th>Image Link</th> */}
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {order?.map((pd, index) => (
              <tr>
                {/* <td>{pd._id}</td> */}
                <td id='abc' className='small'>
                  {pd.title}
                </td>
                <td className='small '>{pd.name}</td>
                <td className='small '>{pd.email}</td>
                <td className='small '>{pd.city}</td>
                {/* <td>{pd.image}</td> */}
                <td>
                  <button
                    onClick={() => handleDeleteUser(pd._id)}
                    className='btn bg-warning p-2'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Orders
