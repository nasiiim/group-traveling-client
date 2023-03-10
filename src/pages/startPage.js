import React from 'react'
import { Container, Button, Row} from 'react-bootstrap'


const StartPage = () => {
  return (
    <div>
        <Container>
          <Row>
            <img src='../public/images/airplan1.png' alt='airplan'/>
          </Row> 
            <span>Let’s travel the beautiful world together</span>

            <Button variant="primary" >Sign in</Button>
            <a href='#'>Create an account</a>
        </Container>
      
    </div>
  )
}


export default StartPage
