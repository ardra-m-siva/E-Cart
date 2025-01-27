import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../redux/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import cartStore from '../redux/cartStore'
const Home = () => {
  const dispath = useDispatch()
  const { allProducts, loading, errorMsg } = useSelector(state => state.productReducer)
  console.log(allProducts, loading, errorMsg);

  useEffect(() => {
    dispath(fetchProducts())
  }, [])
  return (
    <>
      <Header insideHome={true} />
      <div style={{ paddingTop: '100px' }} className='container px-4 mx-auto' >
        {
          loading ?
            <div className='flex justify-center items-center py-5 text-3xl'>
              <img height={'200px'} width={'200px'} src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="" />
              Loading....
            </div>
            :
            <>
              <div className="grid grid-cols-4 gap-5">
               {
                allProducts?.length>0?
                allProducts.map(product=>(
                  <div className="rounded border p-2 shadow">
                  <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
                  <div className='text-center'>
                    <h3 className='text-xl font-bold'>{product?.title}</h3>
                    <Link to={`/${product?.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View more</Link>
                  </div>
                </div>
                )):
                <div className='flex justify-center items-center text-red-600 font-bold text-lg my-5'>
                  Products Not found
                </div>
               }
              </div>
            </>
        }
      </div>
    </>
  )
}

export default Home