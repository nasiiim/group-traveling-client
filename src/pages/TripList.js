import React from 'react'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'
import AddTrip from './AddTrip';

const API_URL = 'http://localhost:3000'



const TripList = () => {
  const [trips, setTrips] = useState([])


  const getAllTrips = () => {

    axios.get(`${API_URL}/api/trips`)
      .then((res) => setTrips(res.data))
      .catch((err) => console.log(err));

  }


  useEffect(() => {
    getAllTrips();
  }, [])



  return (
    <div className='TripsList'>


      <AddTrip refreshTrips={getAllTrips} />


      {trips.map((trip) => {
        return (

          <div className='TripListPage'>
            <Link to={`/trips/${trip._id}`} key={trip._id}>

              <Card className='text-center'
                style={{ width: '18rem' }}
              >

                <Card.Img variant="top" src={trip.image} />
                <Card.Body>
                  <Card.Title>{trip.title}</Card.Title>
                  <Button>See more</Button>
                </Card.Body>

              </Card>
            </Link>
          </div>
        )
      })}


    </div>
  )
}

export default TripList
