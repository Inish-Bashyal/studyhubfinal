import React from "react";
import InformationCard from "./InformationCard";
import "../Styles/Info.css";
import { faUserTie, faLanguage, faPassport } from '@fortawesome/free-solid-svg-icons';

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        At Study Hub International, we simplify your educational journey with personalized consulting services. Our dedicated team provides expert guidance on course selection, university applications, and visa processes. We aim to make your study abroad experience smooth and successful by offering tailored advice and support every step of the way.

        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Career Counselling"
          description="Our Career Counselling service offers personalized support to help you navigate your career path. Whether you're exploring new career opportunities, seeking advice on career transitions, or looking for guidance on professional development, our expert counselors are here to provide tailored advice and strategies. We focus on understanding your unique goals and aspirations to help you achieve a fulfilling and successful career."

          icon={faUserTie}
        />

        <InformationCard
          title="IELTS/German/Korean Classes"
          description="Our language classes offer expert instruction in IELTS preparation, German, and Korean. Whether you're aiming to achieve high scores on the IELTS, master German for work or travel, or learn Korean for personal enrichment, our experienced educators provide comprehensive training and support. We use interactive methods and personalized feedback to help you achieve your language goals and enhance your communication skills."

          icon={faLanguage}
        />

        <InformationCard
          title="Visa Processing"
          description="Navigate the complexities of visa applications with ease through our comprehensive visa processing services. Our experienced team guides you through each step, from gathering necessary documents to completing applications and addressing any issues that may arise. Whether you're applying for travel, study, or work visas, we ensure a smooth and efficient process tailored to your needs."

          icon={faPassport}
        />
      </div>
    </div>
  );
}

export default Info;
