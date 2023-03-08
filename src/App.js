import  {Container}  from 'react-bootstrap';
import './App.css';
import { Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import EditTrip from './pages/EditTrip';
import TripDetails from './pages/TripDetails';
import Signup from './pages/Signup';
import Login from './pages/Login';
import IsPrivate from './components/IsPrivate';
import Navbar from './components/Navbar';
import UserPanel from './pages/UserPanel';

function App() {
  return (
    <div className="App">

     <Navbar />

       <Container>
        <Routes>
        <Route path="/" element={<HomePage />} /> 
        {/* <Route path="/" element={<startPage />} /> */}
        <Route path="/trips/edit/:tripId" element={<IsPrivate> <EditTrip /> </IsPrivate> } />
        <Route path="/trips/:tripId" element={ <TripDetails /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/userPanel" element={ <UserPanel/> } />
        </Routes>


       </Container>
    </div>
  );
}

export default App;
