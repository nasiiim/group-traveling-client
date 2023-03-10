import React from 'react'

import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { Card, Button,   } from 'react-bootstrap'
import image1 from "../images/img-plc.webp"
import { AuthContext } from "../context/auth.context";

import './TripList.css';




const API_URL = 'http://localhost:3000'



const TripList = (props) => {
  const { isCreatorLoggedIn } = useContext(AuthContext);

  const { filterType, tripDataList } = props
  const [trips, setTrips] = useState([])

  useEffect(() => {       //todo: fix - dosen't filter data when input is impty
    console.log(tripDataList)
    if (tripDataList) {
      setTrips(tripDataList)
    }
    else {
      axios.get(`${API_URL}/api/trips?type=${filterType}`)
        .then((res) => setTrips(res.data))
        .catch((err) => console.log(err));
    }

  }, [filterType, tripDataList])



  return (
    <div className='List'>
      
      {trips.map((trip) => {
        return (
          <div className='TripListPage' key={trip._id}>
            <Card border="light" className='text-center'
              style={{ width: '18rem' }}
              bg = "light"
              id='card'
            >
                {/* src={trip.image} */}
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>{trip.destination}</Card.Title>

                {isCreatorLoggedIn(trip.creatorId) && (
                  <>
                    <Link to={`/trips/edit/${trip._id}`}>
                      <Button>Edit</Button>
                    </Link>

                  </>
                )}

                <Link to={`/trips/${trip._id}`} >
                  <Button id='btn-gn'>See more</Button>
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
