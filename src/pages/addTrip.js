import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import {
    Container, Form, Row, Col,
    FormControl, Button
} from 'react-bootstrap'
import './AddTrip.css'



const AddTrip = (props) => {

    const [location, setLocation] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    const API_URL = 'http://localhost:3000'

    const submitForm = (e) => {
        e.preventDefault()
        const userId = localStorage.getItem('userId');
        const body = { creatorId: userId, startDate: startDate, endDate: endDate, destination: location }

        axios.post(`${API_URL}/api/trips`, body)
            .then((res) => {
                setLocation('')
                setStartDate('')
                setEndDate('')
            })
            .catch((error) => console.log(error));
    }


    return (
        <Container  className='AddTripPage'>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <Form className='form-trip' onSubmit={submitForm}>
                    <h4>New Trip</h4>

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

                        <Button variant='success' type='submit' id='btn-update'>Add new trip</Button>
                    </Form>
                </Col>
            </Row>

        </Container>
    )
}

export default AddTrip
