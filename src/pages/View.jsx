import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <>
      <Header />
      <div className='flex flex-col mx-5'>
        <div className="grid grid-cols-2 items-center h-screen">
          <div>
            <img className='ms-40' width={'350px'} height={'250px'} src="https://cdn.create.vista.com/api/media/small/319560848/stock-photo-excited-friends-having-fun-shopping-bags-shopping-cart-black-friday" alt="" />
            <div className='flex justify-between mt-5'>
              <button className='bg-blue-600 rounded text-white p-2'>Add to Wishlist</button>
              <button className='bg-green-600 rounded text-white p-2'>Add to Cart</button>
            </div>
          </div>
          <div>
            <h3 className='font-bold'>PID: id</h3>
            <h3 className='text-5xl font-bold'>Title</h3>
            <h4 className='font-bold text-red-600 text-2xl'>$260</h4>
            <h4>Bradn:brand</h4>
            <h4>Category: category</h4>
            <p>
              <span className='font-bold'>Description :</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni laudantium nesciunt nostrum in incidunt unde sapiente tenetur assumenda corporis praesentium dolorem repellat, vitae expedita distinctio aliquam molestiae omnis eius itaque.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default View