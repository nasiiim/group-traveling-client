import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000"
const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);


  const storeToken = (Token) => {
    localStorage.setItem('authToken', token)
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


  useEffect(() => {                 //  <==  ADD                                   
    // to be updated in the next step
  }, []);



  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      isLoading,
      user,
      storeToken,
      authenticateUser
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProviderWrapper, AuthContext };
