import  {Container}  from 'react-bootstrap';
import './App.css';
import { Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import EditTrip from './pages/EditTrip';
import TripDetails from './pages/TripDetails';
import Signup from './pages/Signup';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
       <Container>
        
        <Routes>
        <Route path="/" element={<HomePage />} /> 
        {/* <Route path="/" element={<startPage />} /> */}
        <Route path="/trips/edit/:tripId" element={ <EditTrip /> } />
        <Route path="/trips/:tripId" element={ <TripDetails /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/login" element={ <Login /> } />
        </Routes>


       </Container>
    </div>
  );
}

export default App;
