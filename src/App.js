import  {Container}  from 'react-bootstrap';
import './App.css';
import { Routes, Route } from "react-router-dom";
import startPage from './pages/HomePage';


function App() {
  return (
    <div className="App">
       <Container>
        
        <Routes>
        <Route path="/" element={<startPage />} /> 

        </Routes>


       </Container>
    </div>
  );
}

export default App;
