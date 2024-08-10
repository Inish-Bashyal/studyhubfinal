import React from "react";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";
import Doctor from "../Assets/studyhublogo.png";



function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Study Hub Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        Welcome to Study Hub International Education Consultancy, where we provide expert guidance and support for your educational journey. Our dedicated team offers personalized advice and resources to help you make informed decisions about your studies and career path. Whether you’re preparing for exams, exploring new educational opportunities, or seeking advice on international education, we are here to assist you every step of the way. Join us to unlock your potential and achieve your academic and professional goals.

        </p>

        <h4 className="about-text-title">How It Works</h4>

<SolutionStep
  title="Find the Right Consultant"
  description="Explore our network of experienced education consultants to find the perfect match for your academic and career goals. Book a consultation to receive personalized guidance tailored to your educational needs."
/>

<SolutionStep
  title="Set Up Your Consultation"
  description="Choose a convenient date and time for your consultation. Our team will ensure a seamless scheduling process, allowing you to receive expert advice without any complications."
/>

<SolutionStep
  title="Achieve Your Educational Goals"
  description="Benefit from customized strategies and advice from our expert consultants. Whether it's choosing the right course, preparing for exams, or exploring study abroad options, we are dedicated to helping you succeed in your educational journey."
/>

      </div>
    </div>
  );
}

export default About;
