import React from 'react'
import TripList from './TripList';
import AddTrip from './AddTrip';


const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <AddTrip />
      <TripList filterType='all' />
    </div>
  )
}

export default HomePage
