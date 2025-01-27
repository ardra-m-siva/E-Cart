import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <>
            <Header />
            <div style={{ paddingTop: '100px' }} className='px-5'>
                <>
                <h1 className='text-5xl font-bold text-blue-600'>Cart Summary..</h1>
                <div className="grid grid-cols-3 gap-4 mt-5">
                    <div className="col-span-2 border rounded shadow p-5">
                        <table className='table-auto w-full'>
                            <thead>
                                <tr>
                                    <td className='font-semibold'>#</td>
                                    <td className='font-semibold'>Name</td>
                                    <td className='font-semibold'>Image</td>
                                    <td className='font-semibold'>Quantity</td>
                                    <td className='font-semibold'>Price</td>
                                    <td className='font-semibold'>...</td>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Product name</td>
                                    <td><img width={'70px'} height={'70px'} src="https://cdn.create.vista.com/api/media/small/319560848/stock-photo-excited-friends-having-fun-shopping-bags-shopping-cart-black-friday" alt="" /></td>
                                    <td>
                                        <div className='flex'>
                                            <button className='font-bold'>-</button>
                                            <input style={{width:'40px'}} className='border rounded p-1 mx-2' type="text" value={11} />
                                            <button className='font-bold'>+</button>
                                        </div>
                                    </td>
                                    <td>$230</td>
                                    <td><button className='text-red-500'><i className='fa-solid fa-trash'></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='float-right mt-5'>
                            <button className='bg-red-600 rounded text-white p-2'>Empty Cart</button>
                            <Link to={'/'} className='bg-blue-500 ms-3 rounded p-2 text-white'>Shop More</Link>
                        </div>
                    </div>
                    <div className='col-span-1 '>
                        <div className='border rounded shadow p-5'>
                            <h2 className='text-2xl font-bold m-2'>Total Amount: <span className='text-red-600'> $300 </span></h2>
                            <hr />
                            <button className='bg-green-700 rounded text-white w-full p-2 mt-5'>Check Out</button>
                        </div>

                    </div>
                </div>
                </>
            </div>
        </>
    )
}

export default Cart