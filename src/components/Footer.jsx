import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'250px'}} className='mt-5 bg-violet-600 w-full p-4 '>
      <div className='flex justify-between p-4'>
        {/* intro */}
        <div style={{height:'200px',color:'white'}}>
          <h5><i class="fa-solid fa-music me-3"></i>Media Player</h5>
          <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        {/* links */}
        <div className='flex flex-col'>
          <h5 className='text-white'>Links</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing page</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home page</Link>
          <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>History page</Link>
        </div>
        {/* guides */}
        <div className='flex flex-col'>
          <h5 className='text-white'>Guides</h5>
          <a href='https://react.dev/' style={{textDecoration:'none',color:'white'}}>React</a>
          <a href='https://react-bootstrap.netlify.app/' style={{textDecoration:'none',color:'white'}}>React Boostrap</a>
          <a href='https://reactrouter.com/' style={{textDecoration:'none',color:'white'}}>React router</a>
        </div>
        {/* contact */}
        <div className='flex flex-col'>
            <h5 className='text-xl font-bold text-white'>Contact Us</h5>
            <div className='flex gap-2'>
              <input type="text" placeholder='Enter your email' className='rounded' />
              <button className='bg-white border hover:bg-violet-600 hover:text-white hover:border-white text-violet-600 rounded p-1 px-2 '><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className='icons flex justify-between mt-3'>
              <a href="" style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter"></i></a>
              <a href="" style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram"></i></a>
              <a href="" style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook"></i></a>
              <a href="" style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-github"></i></a>
              <a href="" style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin"></i></a>
              <a href="" style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-phone"></i></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer