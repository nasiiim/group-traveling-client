import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";


const API_URL = "http://localhost:3000"
const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);


  const storeToken = (Token) => {
    localStorage.setItem('authToken', Token)
    localStorage.setItem('userId', getUserId(Token))
  }


  const getUserId = (Token) => {
    var decoded = jwt_decode(Token);
    return decoded._id
  }

  const isCreatorLoggedIn= (creatorId) =>{
    const token = localStorage.getItem('authToken');
    const currntUserId = getUserId(token)
    return creatorId === currntUserId
  }
  const authenticateUser = () => {

    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      axios.get(`${API_URL}/auth/verify`,
        { headers: { Authorization: `Bearer ${storedToken}` } })
        .then((res) => {
          const user = res.data
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(user);
        })
        .catch((err) => {
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        });
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  }


  const removeToken = () => {
    localStorage.removeItem("authToken");
  }


  const logOutUser = () => {
    removeToken();
    authenticateUser();
  }


  useEffect(() => {
    authenticateUser()
  }, []);



  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      isLoading,
      user,
      storeToken,
      authenticateUser,
      logOutUser,
      isCreatorLoggedIn
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProviderWrapper, AuthContext };
