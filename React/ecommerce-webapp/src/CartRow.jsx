import React from 'react'
import { useDispatch } from 'react-redux';
import { removeCart , incrementQuantity , decrementQuantity } from './utlity/Store/cartSlice';

const CartRow = ({cartObj}) => {
    // console.log(cartObj)
    let {dataObj , quantity } = cartObj;

    let dispatch = useDispatch();

        let {thumbnail , price , rating , title , id   } = dataObj;
  return (
    <tr className='text-xl'>
        <td >
          <div className="flex items-center gap-3 ">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12 bg-white">
                <img
                  src={thumbnail}
                  alt="productPhoto" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
             
            </div>
          </div>
        </td>
        <td>
         {rating}
        
        </td>
        <td>{price}</td>
        <th>
         <span onClick={()=> dispatch(incrementQuantity(id))}> 🔼</span><span className='px-2'>{quantity}</span> <span onClick={()=> dispatch(decrementQuantity(id))}>🔽</span>
        </th>
        <th>
        <button className="btn btn-outline btn-error" onClick={ ()=> dispatch(removeCart(id))} >Remove</button>
        </th>
      </tr>
  )
}

export default CartRow
