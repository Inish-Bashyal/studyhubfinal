import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Germany from '../Assets/images/germany.png'
import Korea from '../Assets/images/korea.png'
import { useNavigate } from "react-router-dom";

function InformationCard(props) {
  const navigate = useNavigate();
  return (
    <div className="info-cards">
      <span className="info-card-icon">
        <FontAwesomeIcon className="info-fa-icon" icon={props.icon} />
      </span>
      {props.title!=='IELTS/German/Korean Classes' && (
      <p className="info-card-title">{props.title}</p>
      )}
        {props.title==='IELTS/German/Korean Classes' && (
      <div className="headerSection">
      <p className="info-card-title">{props.title}</p>
      <span>
          <div style={{display:'flex', gap:'4px'}}>
            <img className="header-img" src={Korea} alt="countries" />
            <img className="header-img" src={Germany} alt="countries" onClick={()=>{
              navigate('/germany')
            }}/>
          </div>
      </span>
      </div>
        )}
      <p className="info-card-description">{props.description}</p>     
    </div>
  );
}

export default InformationCard;
