import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"
import './index.css'

//  let h1element = React.createElement("h1", {} , "Heading Tag") // React 
 


//  function Hey(){
//   return (
//     <h1> heading tag </h1> 
//   )
//  }


ReactDOM.createRoot(document.getElementById('root')).render(
  // Hey()
  //<Hey/>
  //<Hey></Hey>
  <App/>
)
