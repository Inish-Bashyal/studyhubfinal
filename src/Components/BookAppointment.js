import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";
import Logo from "../Assets/studyhublogo.png";


function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    window.open('https://forms.gle/YhodXX5tLHhQe8QZ9', '_blank');

  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Logo} alt="Logo" className="ba-image1" />
      </div>

      <div className="ba-text-content">
  <h3 className="ba-title">
    <span>Why Choose Us</span>
  </h3>
  <p className="ba-description">
    Discover why Study Hub International Education Consultancy is the ideal partner for your educational journey. We offer expert advice, personalized solutions, and a commitment to your academic success. Join us to explore new opportunities and achieve your educational goals with confidence.
  </p>

  <p className="ba-checks ba-check-first">
    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#F9980F" }} /> Expert Educational Consultants
  </p>
  <p className="ba-checks">
    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#F9980F" }} /> Personalized Guidance
  </p>
  <p className="ba-checks">
    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#F9980F" }} /> Comprehensive Resources
  </p>
  <p className="ba-checks ba-check-last">
    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#F9980F" }} /> Easy Consultation Booking
  </p>

  <button
    className="text-appointment-btn"
    type="button"
    onClick={handleBookAppointmentClick}
  >
    <FontAwesomeIcon icon={faCalendarCheck} /> Book a Consultation
  </button>
</div>

    </div>
  );
}

export default BookAppointment;
