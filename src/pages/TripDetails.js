import { useState, useEffect, useContext, React } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { AuthContext } from "../context/auth.context";


const API_URL = "http://localhost:3000";

const TripDetails = () => {
  const [trip, setTrip] = useState({})
  const { tripId } = useParams();
  const { user } = useContext(AuthContext);
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
    <div className='TripDetails'>
      <li className="TripCard card" key={trip._id}>
        {/* <img src={trip.image} /> */}
        <h3>{trip.destination}</h3>
        <p>{trip.startDate}</p>
        <p>{trip.startDate}</p>
      </li>

      <Link to='/'>Back</Link>
      <Button variant="primary" onClick={handleAddSubscriber}>Join</Button>
    </div>
  )
}

export default TripDetails
