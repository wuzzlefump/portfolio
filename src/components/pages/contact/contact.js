import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class Contact extends Component{

    render(){
        return (
        <div style={{display:'flex',justifyContent:"center"}}>
        <Card style = {{width:'35rem', padding: "2%", marginTop:'5%' }}>  

            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <InputGroup>
        <InputGroup.Prepend>
        <InputGroup.Text>textarea</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl placeholder="Email Function in developement" as="textarea" aria-label="With textarea" />
        </InputGroup>
            <Button>Submit</Button>
</Card></div>  )
    }
}

export default Contact;