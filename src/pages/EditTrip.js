import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

import {
    Container, Form, Row, Col,
     FormControl, Button
} from 'react-bootstrap'
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000"

const EditTrip = () => {
    const [location, setLocation] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    const { tripId } = useParams(); 
    const navigate = useNavigate(); 



    useEffect(()=>{
        axios.get(`${API_URL}/api/trips/${tripId}`)
        .then((res) => {
            const oneTrip = res.data
            setLocation(oneTrip.destination)
            setStartDate(oneTrip.startDate)
            setEndDate(oneTrip.endDate)
        })
        .catch((err) => console.log(err));
    }, [tripId])


    const handleFormSubmit = (e) => {
        e.preventDefault();

        const requestBody = { location, startDate, endDate}

        axios.put(`${API_URL}/api/trips/${tripId}`, requestBody)
        .then((res) => {
            navigate(`/trips/${tripId}`)
        })

    }





  return (
    <div className='EditTripPAge'>
        <h4>Edit your Trip:</h4>

        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <Form className='form-trip' onSubmit={handleFormSubmit} >
                        <Row>
                            <FormControl type='text'
                                placeholder='Where?'
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </Row>
                        <Row>
                            <Col>
                                <FormControl type='datetime-local'
                                    placeholder='checkin'
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <FormControl type='datetime-local'
                                    placeholder='checkout'
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </Col>
                        </Row>

                        <Button variant='success' type='submit'>Update Trip</Button>
                    </Form>
                </Col>
            </Row>

        </Container>
      
    </div>
  )
}

export default EditTrip
