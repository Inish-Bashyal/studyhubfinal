import React, { useEffect, useState } from "react";
import Doctor from "../Assets/studyhublogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Hero.css";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    window.open('https://forms.gle/YhodXX5tLHhQe8QZ9', '_blank');
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">Your future starts here</p>
          <h2 className="text-title">
          Discover Your Ideal Study Path with Us
          </h2>
          <p className="text-descritpion">
          At Study Hub International, we guide you through every step of your educational journey. Whether you're looking for expert advice on choosing the right course, finding the best universities, or navigating the visa process, our team is here to provide personalized support and make your study abroad experience seamless and successful.

          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
        
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Logo" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
