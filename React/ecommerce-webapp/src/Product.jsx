import React from "react";
import { useParams } from "react-router-dom";
import useCallSingleProductApi from "./utlity/useCallSingleProductApi";
import Reviews from "./Reviews/Reviews";
import { useDispatch ,useSelector} from "react-redux";
import { addCart } from "./utlity/Store/cartSlice";



const Product = () => {
  let { id } = useParams();

  let obj = useCallSingleProductApi(id);
  let dispatch = useDispatch();

  let cartItems = useSelector((store=> store.cart.items ))


  let isPresentIncart = ()=>{
    let objIdx = cartItems.findIndex((cartObj)=> cartObj.dataObj.id == id );
    return objIdx
  }

  // put shimmer UI
  if (obj == null) return <></>;

  let { thumbnail, title, category, price, rating, stock , reviews} = obj;

  return (
    <div className="h-[92vh] w-screen bg-base-200 pt-6">
      <div className="card card-side bg-base-100 shadow-xl w-1/2 mx-auto ">
      { isPresentIncart() !=-1 ?  <p  className="bg-orange-500 rounded-2xl  absolute text-black p-1 top-3 left-3 font-bold"> Added in Cart  </p> : null }
        <figure>
          <img src={thumbnail} alt="product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div>
            <button className="btn m-1">
              Price
              <div className="badge badge-secondary">{price}</div>
            </button>
            <button className="btn m-1">
              Rating
              <div className="badge badge-secondary">{rating}</div>
            </button>
            <button className="btn m-1">
              category
              <div className="badge badge-secondary">{category}</div>
            </button>
            <button className="btn m-1">
              Stock
              <div className="badge badge-secondary">{stock}</div>
            </button>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={()=> dispatch(addCart(obj))}>Add to cart </button>
          </div> 
        </div>
      </div>
      <Reviews reviews={reviews}></Reviews>
    </div>
  );
};

export default Product;
