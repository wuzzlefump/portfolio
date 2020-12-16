import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact(){

        return (
        <div style={{display:'flex',justifyContent:"center"}}>
        <Card style = {{width:'45rem', padding: "2%", marginTop:'5%', backgroundColor:"darkgray", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", marginBottom:"5%" }}>  
        <FontAwesomeIcon style={{color:"lightGreen", marginTop:"4%", marginBottom:"4%"}} icon={faEnvelope} size="10x" />
        <Card.Body style={{textAlign:"center"}}>
            <h2>Thanks for Visiting</h2>
            <p> If you would like to contact Paul you can Look at his other pages in the outside links below, or you can reach him at his email:</p>
            <a href="mailto:paulelliottwork@gmail.com" style={{color:"lime"}}>Paulelliottwork@gmail.com</a>
        </Card.Body>
        </Card>
        </div> 
 )
}

export default Contact;