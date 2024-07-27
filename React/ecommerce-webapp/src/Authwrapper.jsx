import React, { useState, useEffect } from "react";
import axios from "axios";
import { userApi } from "../constant";
import { Navigate } from "react-router-dom";

const Authwrapper = ({ children }) => {
  let [isAuthenticated, setIsAuthenticated] = useState(false);
  let [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const response = await axios.get(`${userApi}/user`, {
        withCredentials: true,
      });

      setIsAuthenticated(response.data.result);
    } catch (err) {
      console.log(err);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);

  if( loading ){
    return <div> ..... Loading </div>
  }else {
    return isAuthenticated == true ? children : <Navigate to="/login"></Navigate>
  }
 
};

export default Authwrapper;
