
import Navbar from "./Navbar";
import {Outlet} from "react-router-dom"
import ThemeContext from "./utlity/ThemeContext";

function App(){
  return (
    <>
    
    <ThemeContext>
    <Navbar></Navbar>
   <Outlet></Outlet>
   </ThemeContext>
    </>
  )
} 

export default App