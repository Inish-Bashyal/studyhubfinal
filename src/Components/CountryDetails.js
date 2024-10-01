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

      <div className="info-cards-content" >
        <CountryCard
          title="Korea"
          description="Our Career Counselling service offers personalized support to help you navigate your career path. Whether you're exploring new career opportunities, seeking advice on career transitions, or looking for guidance on professional development, our expert counselors are here to provide tailored advice and strategies. We focus on understanding your unique goals and aspirations to help you achieve a fulfilling and successful career."
           link='/korea'
          icon={Korea}
        />

        <CountryCard
          title="Germany"
          description="Our language classes offer expert instruction in IELTS preparation, German, and Korean. Whether you're aiming to achieve high scores on the IELTS, master German for work or travel, or learn Korean for personal enrichment, our experienced educators provide comprehensive training and support. We use interactive methods and personalized feedback to help you achieve your language goals and enhance your communication skills."
          link='/germany'
          icon={Germany}
        />

      </div>
    </div>
  );
}

export default CountryInfo;
