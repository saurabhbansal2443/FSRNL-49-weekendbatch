import React from 'react';
import {useRouteError } from 'react-router-dom'

const Error = () => {
    let error = useRouteError()
    console.log(error)
  return (
    <div>
      This is my custom Error page 
      {error.data}
      {error.status}
    </div>
  )
}

export default Error
