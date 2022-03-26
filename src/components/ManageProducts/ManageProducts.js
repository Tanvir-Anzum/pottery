import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import './ManageProducts.css'

const ManageProducts = () => {
  const [product, setProduct] = useState([])
  // const [control, setControl] = useState(false)

  useEffect(() => {
    fetch('https://whispering-fjord-55786.herokuapp.com/allEvents')
      //  fetch('https://localhost:5000/orders')
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [])

  const handleDeleteUser = (id) => {
    // const confirmBox = window.confirm('Are you sure you want to delete?')
    // if (confirmBox === true) {
    fetch(`https://whispering-fjord-55786.herokuapp.com/allEvents/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          console.log(data.deletedCount)
          // setControl(!control)
          const remains = product.filter((ord) => ord._id != id)
          setProduct(remains)
        } else {
          console.log(data.deletedCount)
          // setControl(false)
        }
      })
  }
   document.body.style = ' background-color: white;'
  return (
    <div>
      <p className='mt-5 mb-3 texts text-muted'>Products</p>
      <div className='d-flex justify-content-center'>
        <Table className='table'>
          <thead>
            <tr>
              {/* <th>#</th> */}
              {/* <th>Service id</th> */}
              <th>Product ID</th>
              <th>Product Name</th>
              {/* <th>Image Link</th> */}
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {product?.map((pd, index) => (
              <tr className=''>
                {/* <td>{pd._id}</td> */}
                <td className='rowss small'>{pd._id}</td>
                <td className='rowss small'>{pd.title}</td>
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

export default ManageProducts
