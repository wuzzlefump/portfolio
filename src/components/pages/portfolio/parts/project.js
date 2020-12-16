import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCode } from '@fortawesome/free-solid-svg-icons'
import { faUmbrella } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faArchive } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'


function Project(props) {
const iconList =[{name:"code", icon:faCode},{name:"weather", icon:faUmbrella},{name:"game", icon:faHandshake},{name:"dance", icon:faMusic},{name:"user",icon:faUsers},{name:"oldCode", icon:faArchive}]
const [avatarState,setAvatarState] = useState()

const avatarSet = () =>{
iconList.forEach(item=>{
  if(item.name===props.img){
    setAvatarState(item.icon)
  }
})
}

useEffect(()=>{
avatarSet()
},[])
        return (<Card style={{ width: '30rem', borderRadius:'10px', marginTop:'1%', marginBottom: '1%', backgroundColor: 'darkgrey', display:"flex", alignItems:"center",flexDirection:"column", justifyContent:"center" }}>
        <FontAwesomeIcon style={{color:"lightGreen", marginTop:"4%", marginBottom:"4%"}} icon={avatarState} size="8x" />
        <Card.Body style = {{borderTop: "2px solid black"}}>
        <Card.Title style={{textAlign:"center"}}>{props.name}</Card.Title>
          <Card.Text style={{textAlign:"center"}}>
        {props.description}
          </Card.Text>
          <div style={{display:"flex", justifyContent:"space-around"}}>
          <Button style={{paddingLeft: 20, paddingRight:20}} variant="success" href = {props.link}>Website</Button>
          <Button style={{paddingLeft:20, paddingRight:20}} variant="success" href = {props.repo}>Repo</Button>
          </div>

        </Card.Body>
      </Card>)
    }

export default Project;