import ProductCard from "./ProductCard.jsx";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI.jsx";
import { useContext } from "react";
import { ThemeStore } from "./utlity/ThemeContext";
import AddedProductInCart from "./utlity/Store/AddedProductInCart.jsx";
import { useSelector } from "react-redux";


let Home = () => {
  let [allProducts, setAllProducts] = useState([]);
  let [productData, setProductData] = useState([]);
  let [searchQuery, setSearchQuery] = useState("");

  let { theme } = useContext(ThemeStore);

  let getData = async () => {
    let data = await fetch("https://dummyjson.com/products");
    let obj = await data.json();
    setAllProducts(obj.products);
    setProductData(obj.products);
  };

  let AddedComponent = AddedProductInCart(ProductCard)
  
  let cartItems = useSelector((store=> store.cart.items ))


  let isPresentIncart = (id)=>{
    let objIdx = cartItems.findIndex((cartObj)=> cartObj.dataObj.id == id );
    return objIdx
  }

  useEffect(() => {
    getData();
  }, []);

  if (allProducts.length == 0) {
    return <ShimmerUI></ShimmerUI>;
  }

  let handleRating = () => {
    let filteredArray = allProducts.filter((obj) => {
      return obj.rating > 4;
    });
    setProductData(filteredArray);
  };

  let handleCategory = (category) => {
    let filteredArray = allProducts.filter((obj) => {
      return obj.category == category;
    });
    setProductData(filteredArray);
  };

  let handleSearch = () => {
    let filteredArray = allProducts.filter((obj) => {
      return obj.title.toLowerCase().includes(searchQuery.toLowerCase().trim());
    });

    setProductData(filteredArray);
    setSearchQuery("");
  };

  let darkTheme = " min-h-[91vh] w-screen  flex  flex-col ";
  let lightTheme = " min-h-[91vh] w-screen  flex  flex-col  bg-gray-200";

  return (
    <div className={theme == "light" ? lightTheme : darkTheme}>
      <div className="utility flex w-100 justify-around mt-2">
        {/* {console.log("render called ")} */}
        <button className="btn btn-primary" onClick={handleRating}>
          Top-Rating
        </button>

        <button
          className="btn btn-primary"
          onClick={() => {
            handleCategory("furniture");
          }}
        >
          {" "}
          Furniture{" "}
        </button>

        <div className="searchBar">
          <input
            type="text"
            className="h-11 p-2 rounded-2xl"
            value={searchQuery}
            onChange={(event) => {
              setSearchQuery(event.target.value);
            }}
          ></input>
          <button className="btn btn-success mx-2 " onClick={handleSearch}>
            Search
          </button>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => {
            handleCategory("beauty");
          }}
        >
          Beauty{" "}
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            handleCategory("groceries");
          }}
        >
          Grocery
        </button>
      </div>

      <div className="flex flex-wrap justify-around">
        {productData.map((obj) => <>{isPresentIncart(obj.id)!=-1 ?<AddedComponent obj={obj} key={obj.id}></AddedComponent> :  <ProductCard obj={obj} key={obj.id}></ProductCard>}</>)}
      </div>
    </div>
  );
};

export default Home;
