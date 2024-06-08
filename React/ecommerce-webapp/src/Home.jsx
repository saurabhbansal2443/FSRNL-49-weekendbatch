import Data from "./Data.js";
import ProductCard from "./ProductCard.jsx";
import { useState } from "react";

let Home = () => {
    let [allProducts , setAllProducts] = useState([...Data])
   let [productData, setProductData] = useState([...Data]);
   let [searchQuery , setSearchQuery] = useState("");

  let handleRating = () => {
    let filteredArray = allProducts.filter((obj) => {
      return obj.rating > 4;
    });
    setProductData(filteredArray);
  };


  let handleCategory = (category) => {
    let filteredArray = allProducts.filter((obj) => {
        return obj.category  ==  category;
      });

      setProductData(filteredArray);
  }

  let handleSearch = () => {
    let filteredArray = allProducts.filter((obj) => {
        return obj.title.toLowerCase().includes(searchQuery.toLowerCase())
      });

      setProductData(filteredArray);
      setSearchQuery("")
  }

  return (
    <div className=" h-[91vh] w-screen  flex  flex-col ">
      <div className="utility flex w-100 justify-around mt-2">
        {/* we have to pass the refrence of the callback function  */}
        <button className="btn btn-primary" onClick={handleRating}> 
          Top-Rating
        </button>
         {/* we have to pass the refrence of the callback function // we are calling the function   */}
        <button className="btn btn-primary" onClick={()=>{handleCategory('furniture')}}> Furniture </button>

        <div className="searchBar">
          <input type="text" className="h-11 p-2 rounded-2xl" value={searchQuery} onChange={(event)=>{setSearchQuery(event.target.value)} } ></input>
          <button className="btn btn-success mx-2 " onClick={handleSearch}>Search</button>
        </div>

        <button className="btn btn-primary" onClick={()=>{handleCategory('beauty')}}>Beauty </button>
        <button className="btn btn-primary" onClick={()=>{handleCategory('groceries')}} >Grocery</button>
      </div>

      <div className="flex flex-wrap justify-around">
        {productData.map((obj) => {
          return <ProductCard obj={obj} key={obj.id}></ProductCard>;
        })}
      </div>
    </div>
  );
};

export default Home;
