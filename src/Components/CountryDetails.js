import React from "react";
import "../Styles/Info.css";
import Korea from '../Assets/images/korea.png'
import Germany from '../Assets/images/germany.png'
import CountryCard from "./CountryCard";

function CountryInfo() {
  return (
    <div className="info-section" id="services" >
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Country's Specifications</span>
        </h3>
        <p className="info-description">
        Get detailed information of the countries.

        </p>
      </div>

      <div className="country-info-cards-content" >
        <CountryCard
          title="Korea"
          description="Explore career opportunities and gain expert guidance on building a successful career in Korea."
          link='/korea'
          icon={Korea}
        />

        <CountryCard
          title="Germany"
          description="Learn German or prepare for your career and education in Germany with our expert guidance."
          link='/germany'
          icon={Germany}
        />

      </div>
    </div>
  );
}

export default CountryInfo;
