import React, {Component} from 'react';
import Project from "./parts/project";
import List from './list.json'


function Portfolio (){




        return (
            <div style ={{display:"flex", justifyContent:"space-around", margin:"5%", flexWrap:"wrap"}}>
            {List.map(item => (<Project
            id = {item.id}
            name = {item.name}
            img= {item.img}
            description = {item.description}
            link ={item.link}
            repo ={item.repo}
            />))}
        </div>)
    }

export default Portfolio;