import React from 'react'
import TripList from './TripList'
import AddTrip from './AddTrip'


const UserPanel = () => {

  return (
    <div>
      <AddTrip />
      <TripList filterType='own' />
    </div>
  )
}

export default UserPanel
