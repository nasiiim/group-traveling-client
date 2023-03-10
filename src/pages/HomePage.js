import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import TripList from './TripList';
import { Button, Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import image1 from "../images/photo-travel.jpg"
import './HomePage.css'

const API_URL = "http://localhost:3000"




const HomePage = () => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);



  const HandleSubmit = (e) => {
    e.preventDefault()
    axios.get(`${API_URL}/api/trips?destination=${query}`)
      .then((res) => setSearchResult(res.data))
      .catch((err) => console.log(err));
    // useEffect(() =>{


    //  }, [query])
  }



  return (

    <Container className='home-page' fluid>

      <Row className="header-image">
        <Col className="d-flex align-items-start justify-content-center" >
          <Form  className="taghi" onSubmit={HandleSubmit}>
          <InputGroup className="md-5 form-text">
            <Form.Control
           
              type="text"
              name="query"
              placeholder='where?'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button  type='submit'id='btn-search'>Search</Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>

      {/* <Row  >
          <img src={image1} className="image"/>  
      </Row> */}

      <Row className="justify-content-center">

        <TripList filterType='all' tripDataList={searchResult} />

      </Row>

    </Container>

  )
}

export default HomePage
