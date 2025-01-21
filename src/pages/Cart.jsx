import React from 'react'
import Header from '../components/Header'

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
                        </table>

                    </div>

                </div>
                </>
            </div>
        </>
    )
}

export default Cart