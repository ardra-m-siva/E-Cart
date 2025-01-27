import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../redux/slices/productSlice'
import { useDispatch } from 'react-redux'
const Home = () => {
  const dispath=useDispatch()
 useEffect(()=>{
  dispath(fetchProducts())
 },[])
  return (
    <>
    <Header insideHome={true}/>
    <div style={{paddingTop:'100px'}} className='container px-4 mx-auto' >
      <div className="grid grid-cols-4 gap-4">
        <div className="rounded border p-2 shadow">
          <img width={'100%'} height={'200px'} src="https://cdn.create.vista.com/api/media/small/319560848/stock-photo-excited-friends-having-fun-shopping-bags-shopping-cart-black-friday" alt="" />
          <div className='text-center'>
            <h3 className='text-xl font-bold'>title</h3>
            <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View more</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home