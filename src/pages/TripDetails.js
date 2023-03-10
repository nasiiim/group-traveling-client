import { useState, useEffect, useContext, React } from "react";
import axios from "axios";
import {  useParams } from 'react-router-dom';
// import { Button } from 'react-bootstrap'
import { AuthContext } from "../context/auth.context";
import image1 from "../images/img-plc.webp"
import { Button, Col, Row } from 'react-bootstrap'

import './TripDetails.css'

const API_URL = "http://localhost:3000";

const TripDetails = () => {
  const { isCreatorLoggedIn, user } = useContext(AuthContext);

  const [trip, setTrip] = useState({})
  const { tripId } = useParams();
  useEffect(() => {
    axios.get(`${API_URL}/api/trips/${tripId}`)
      .then((res) => {
        const oneTrip = res.data
        setTrip(oneTrip)
      })
      .catch((err) => console.log(err));
  }, [tripId])



  //////add Sub
  const handleAddSubscriber = () => {
    console.table(user)
    const userId = user._id
    axios.post(
      `${API_URL}/api/trips/${tripId}/subscribers/${userId}`,
      { subscriberId: userId }
    )
      .then((res) => { setTrip(res.data); })
      .catch((error) => {
        console.error(error);
      })
  };




  return (

    <div className='TripDetails' >
      <Row>
        <Col  ><img src={image1} /></Col>
        <Col md="auto" key={trip._id} >
          {/* <span className="TripCard card"> */}

          <h3>{trip.destination}</h3>
          <p>{trip.startDate}</p>
          <p>{trip.startDate}</p>
     

          {/* </span> */}
        </Col>
        <Col >
          {!isCreatorLoggedIn(trip.creatorId) && (
            <>
              <Button id='btn-join' variant="primary" onClick={handleAddSubscriber}>Join</Button>
            </>
          )}


        </Col>
      </Row>


      {/* <Link to='/'>Back</Link> */}


    </div>
  )
}

export default TripDetails
