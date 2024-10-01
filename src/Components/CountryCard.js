import React from "react";
import { useNavigate } from "react-router-dom";

function CountryCard(props) {
    const navigate = useNavigate();
  return (
    <div className="info-cards">
    <span className="info-card-icon">
      <img className="header-img" src={props.icon} alt={props.title}/>
    </span>
    {props.title!=='IELTS/German/Korean Classes' && (
    <p className="info-card-title">{props.title}</p>
    )}
      {props.title==='IELTS/German/Korean Classes' && (
    <p className="info-card-title">{props.title}</p>
      )}
    <p className="info-card-description">{props.description}</p> 
    <span style={{display:"flex",width:'100%', justifyContent:"end"}}>
    <button className="nextBtn"  
    onClick={()=>{
        if(props.title==='Germany'){
            navigate(props.link)
        }
    }}>
        Learn more
    </button> 
    </span>   
  </div>
  );
}

export default CountryCard;
