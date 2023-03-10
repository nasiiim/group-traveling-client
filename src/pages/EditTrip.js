import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

import {
    Container, Form, Row, Col,
    FormControl, Button
} from 'react-bootstrap'
import { useParams, useNavigate } from "react-router-dom";

import './EditTrip.css'

const API_URL = "http://localhost:3000"

const EditTrip = () => {
    const [location, setLocation] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    const { tripId } = useParams();
    const navigate = useNavigate();



    useEffect(() => {
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

        const requestBody = { destination: location, startDate, endDate }
        axios.put(`${API_URL}/api/trips/${tripId}`, requestBody)
            .then((res) => {
                navigate(`/trips/${tripId}`)
            })

    }


    const deleteTrip = () => {
        axios.delete(`${API_URL}/api/trips/${tripId}`)
            .then(() => {
                navigate('/trips')
            })
            .catch((err) => console.log(err));
    }


    return (
        <div className='EditTripPAge'>
           

            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <Form className='form-trip' onSubmit={handleFormSubmit} >
                        <h4>Edit your Trip:</h4>
                            <Row>
                                <FormControl type='text'
                                    placeholder='Where?'
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </Row>
                            <Row>
                                <Col>
                                    <FormControl type='date'
                                        placeholder='checkin'
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                    />
                                </Col>
                                <Col>
                                    <FormControl type='date'
                                        placeholder='checkout'
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                    />
                                </Col>
                            </Row>

                            <Button variant='success' type='submit' id='btn-update'>Update Trip</Button>
                        </Form>
                        
                    </Col>
                </Row>
                <Row>
                    <Col id='btn-delete'>
                    <Button variant="danger" onClick={deleteTrip}>Delete </Button>
                    </Col>
                    </Row>
               
            </Container>

        </div>
    )
}

export default EditTrip
