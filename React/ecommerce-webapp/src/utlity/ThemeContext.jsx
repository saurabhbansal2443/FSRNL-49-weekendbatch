import React from 'react';
import { createContext , useState } from 'react';


export let ThemeStore = createContext(); // store 

const ThemeContext = ({children}) => {
 
    let [theme , setTheme ] = useState(localStorage.getItem("Theme"));
 

  return (
   <ThemeStore.Provider value={{theme, setTheme}}>
        {children} 
    </ThemeStore.Provider>
  )
}

export default ThemeContext;


// <Product obj={obj}></Product> // 1st way of passing props 
// <Product>
// <Cart/> // cart is going to be a prop to product page 
//</product>
