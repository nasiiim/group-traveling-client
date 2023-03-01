import  {Container}  from 'react-bootstrap';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
       <Container>
        
        <Routes>
        <Route path="/" element={<HomePage />} /> 

        </Routes>


       </Container>
    </div>
  );
}

export default App;
