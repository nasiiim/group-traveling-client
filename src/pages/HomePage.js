import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import TripList from './TripList';
import { Button } from "react-bootstrap";

const API_URL = "http://localhost:3000"






const HomePage = () => { 
  const [query, setQuery] = useState(""); 
  const [searchResult, setSearchResult] = useState(null);



  const HandleSubmit = (e) =>{
    e.preventDefault()
    axios.get(`${API_URL}/api/trips?destination=${query}`)
    .then((res) => setSearchResult(res.data))
    .catch((err) => console.log(err));
    // useEffect(() =>{

    
    //  }, [query])
  }



  return (
    <div>
      <h1>Home Page</h1>

      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          name="query"
          placeholder='where?'
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
        />
        <Button variant='success' type='submit'>Search</Button>
      </form>

      <TripList filterType='all' tripDataList={searchResult}/>

      
    </div>
  )
}

export default HomePage
