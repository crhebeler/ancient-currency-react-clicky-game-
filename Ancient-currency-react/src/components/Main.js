import React from "react";
import "./Main.css";


const Main = props => (

    <div className="card" onClick={() => props.clickedImage(props.id)}>
            
    <img className="card-img-top img-fluid" src={props.imgSource} alt={props.name} />

 
      </div>
);

export default Main;

