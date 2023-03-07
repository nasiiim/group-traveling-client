import React from 'react'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'


const API_URL = 'http://localhost:3000'



const TripList = () => {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}/api/trips`)
      .then((res) => setTrips(res.data))
      .catch((err) => console.log(err));
  }, [])



  return (
    <div className='TripsList'>

      {trips.map((trip) => {
        return (

          <div className='TripListPage' key={trip._id}>


            <Card className='text-center'
              style={{ width: '18rem' }}
            >

              <Card.Img variant="top" src={trip.image} />
              <Card.Body>
                <Card.Title>{trip.destination}</Card.Title>
                <Link to={`/trips/${trip._id}`} >
                  <Button>See more</Button>
                </Link>
              </Card.Body>

            </Card>
          </div>
        )
      })}


    </div>
  )
}

export default TripList
