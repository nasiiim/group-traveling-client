import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import {
    Container, Form, Row, Col,
    InputGroup, FormControl, Button
} from 'react-bootstrap'



const addTrip = () => {

const [location, setLocation] = useState("")
const[startDate, setStartDate] = useState("")
const[endDate, setEndDate] = useState("")



    const submitForm = (e) => {
        e.preventDefault()

        const body = { startDate : startDate, endDate : endDate, destination : location  }
        
        axios.post("", body)
        .then(() =>{
            
        })

    }


    return (
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <Form className='form-trip' onSubmit={submitForm}>
                        <Row>
                            <FormControl type='text'
                                placeholder='Where?'
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </Row>
                        <Row>
                            <Col>
                            <FormControl type='text'
                                placeholder='checkin'
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                             />   
                            </Col>
                            <Col>
                            <FormControl type='text'
                                placeholder='checkout'
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                             />   
                            </Col>
                        </Row>

                        <Button variant='success' type='submit'>Confirm</Button>
                    </Form>
                </Col>
            </Row>

        </Container>
    )
}

export default addTrip
