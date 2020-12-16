import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from 'react-bootstrap/Button'
import Footer from '../../footer'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './profile.css'
import Accordion from 'react-bootstrap/Accordion'
import Paul from './Paul.jpg'


function Profile (){

        return (
        <Container>
          <Row id="rowOne">
            {/* picture and background image */}
            <Col className="pic">
            <img id="paul" src={Paul}></img>
            </Col>
          </Row>
          <Row id="rowTwo">
            {/* bio */}
            <Col> 
            <h3 className="font">Bio:</h3>
              <Jumbotron className="content">
                <p className="fontTwo"></p>
              </Jumbotron>
            </Col >
          {/* technologies */}
            <Col>
            <h3 className="font">Technologies:</h3>
                <Jumbotron className="content">
                <p className="fontTwo">Over the course of Paul's coding career, he has become familiar with these resources: </p>
                <Accordion style={{width:"100%"}} defaultActiveKey="0">
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle className="font" as={Button} variant="link" eventKey="0">
                        Languages
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <ul>
                          <li>
                            HTML
                          </li>
                          <li>
                            CSS
                          </li>
                          <li>
                            Javascript/ Node
                          </li>
                          <li>
                            Markdown
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Card.Header>
                      <Accordion.Toggle className="font" as={Button} variant="link" eventKey="1">
                        Front-End Frameworks
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <ul>
                        <li>Jquery</li>
                        <li>React</li>
                        </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Card.Header>
                      <Accordion.Toggle className="font" as={Button} variant="link" eventKey="2">
                        Databases
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        <ul>
                          <li>MySQL</li>
                          <li>Mongo DB</li>
                          <li>Indexed DB</li>
                        </ul></Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Card.Header>
                      <Accordion.Toggle className="font" as={Button} variant="link" eventKey="3">
                        CSS Libraries
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        <ul>
                          <li>Bootstrap</li>
                          <li>Bulma</li>
                          <li>Materialize</li>
                          <li>react-Bootstrap</li>
                          <li>reactstrap</li>
                        </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Card.Header>
                      <Accordion.Toggle className="font" as={Button} variant="link" eventKey="4">
                        Notable Packages
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body>
                        <ul>
                          <li>Express</li>
                          <li>Mongoose</li>
                          <li>Sequelize</li>
                          <li>Ace</li>
                          <li>Passport</li>
                        </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                </Accordion>
              </Jumbotron>
            </Col>
          </Row>
        </Container>)
    
}

export default Profile;