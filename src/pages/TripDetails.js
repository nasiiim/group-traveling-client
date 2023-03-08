import { useState, useEffect, React } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const API_URL = "http://localhost:3000";

const TripDetails = () => {
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


  return (
    <div className='TripDetails'>
      <li className="TripCard card" key={trip._id}>
        {/* <img src={trip.image} /> */}
        <h3>{trip.destination}</h3>
        <p>{trip.startDate}</p>
        <p>{trip.startDate}</p>
      </li>

      <Link to='/'>Back</Link>
    </div>
  )
}

export default TripDetails
