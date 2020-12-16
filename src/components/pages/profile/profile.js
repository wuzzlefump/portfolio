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
            <Col sm={12} md={6} > 
            <h3 className="font">Bio:</h3>
              <Jumbotron className="content" >
                <h4>Once Upon A Time....</h4>
                <Card style={{width:"100%", marginTop:"6%",paddingBottom:"3%"}}>
                  <Card.Body>
                    <p><span style={{color:"green", fontWeight:"bold"}}>You</span> stumbled upon the site of a developer named Paul Elliott. Paul's first site was for a webcomic he made in highschool. He then took a 6 year hiatus from coding. During this time he tried many things like: being a paper salesman, being a pedi-cab, and being a personal trainer.</p>
                    <br></br>
                    <p><span style={{color:"green", fontWeight:"bold"}}>During</span>  2020, Paul the dance instructor, began coding again. He Started a coding bootcamp at DU. during the 6 months at the bootcamp Paul fell in love with the creating websites again. He created sites ranging from ones that could help him at work, to ones that play games.</p>
                    <br></br>
                    <p><span style={{color:"green", fontWeight:"bold"}}>If</span>  you are looking for a deloper that loves learning, being creative, and making new things, then you've stumbled into the right place. </p>
                  </Card.Body>
                </Card>
              </Jumbotron>
            </Col >
          {/* technologies */}
            <Col sm={12} md={6}>
            <h3 className="font">Technologies:</h3>
                <Jumbotron className="content">
                <p className="fontTwo" style={{fontWeight:"bold"}}>Over the course of Paul's coding career, he has become familiar with these resources: </p>
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
                          <li>React-Bootstrap</li>
                          <li>Reactstrap</li>
                        </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Card.Header>
                      <Accordion.Toggle className="font" as={Button} variant="link" eventKey="4">
                          Misc.
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
                          <li>Anime js</li>
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