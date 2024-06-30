import React from 'react'

const AddedProductInCart = (Component ) => {
  return (props)=>{
    return (
        <div className='relative'>
        <p  className="bg-orange-500 rounded-2xl absolute text-black p-1  font-bold z-20 top-3 left-3"> Added in Cart  </p>
        <Component {...props}></Component>
        </div>
    )
  }
}

export default AddedProductInCart
