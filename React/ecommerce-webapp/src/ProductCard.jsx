import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeStore } from "./utlity/ThemeContext";
import { useDispatch } from "react-redux";
import { addCart } from "./utlity/Store/cartSlice";

let ProductCard = ({ obj }) => {
  let { title, thumbnail, rating, price, category, id } = obj;
  let {theme } = useContext(ThemeStore);
  let Navigate = useNavigate();
  let handleClick = () => {
    Navigate(`/product/${id}`);
  };

  let dispatch = useDispatch();
  let handleAddbtn = (event) => {

    dispatch(addCart(obj));
    
    event.stopPropagation()
  }

  let darkTheme = "card w-96 bg-base-300 shadow-xl m-3 ";
  let lightTheme = "card w-96 bg-gray-300 shadow-xl m-3 "
  return (
    <div className={theme == "light" ? lightTheme : darkTheme} onClick={handleClick}>
      
      <figure>
        <img
          className="bg-zinc-400 h-[90%] rounded-2xl"
          src={thumbnail}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions justify-between items-center ">
          <div className="badge badge-secondary bg-green-300">{category}</div>
          <div className="badge badge-secondary bg-green-300">{rating}</div>

          <p className=" p-1"> {price} $</p>
          <button className="bg-black text-white p-4 rounded-2xl" onClick={handleAddbtn}> Add </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
