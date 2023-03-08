import React, { useEffect } from 'react'
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



const data = [
  {
      "_id": "64067b8a9450c74c5d608af7",
      "startDate": "1970-01-01T00:00:00.023Z",
      "endDate": "1970-01-01T00:00:00.012Z",
      "destination": "Isfahan-new3",
      "__v": 0,
      "creatorId": "6408cb23353d9c4c472ca69a"
  },
  {
      "_id": "6407adeecba6c00e20dd1246",
      "startDate": "1970-01-01T00:00:00.020Z",
      "endDate": "1970-01-01T00:00:00.012Z",
      "destination": "9",
      "__v": 0
  }
]

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
