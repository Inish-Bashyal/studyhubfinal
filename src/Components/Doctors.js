import React from "react";
import DoctorCard from "./DoctorCard";

import profile1 from "../Assets/studyhublogo.png";
import profile2 from "../Assets/studyhublogo.png";
import profile3 from "../Assets/studyhublogo.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="counsellors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Counsellors</span>
        </h3>

        <p className="dt-description">
        Get to know our dedicated team of expert counsellors at Study Hub International. 
  They are here to guide you every step of the way, ensuring you receive the best 
  advice and support for your educational journey. Trust in their expertise to help 
  you achieve your academic and career goals.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Mr. Anup Kadel"
          title="Germany/Europe Counsellor"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Mr. Anish Kadel"
          title="South Korea/ Australia Counsellor"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="Mr. Rujan Bimali"
          title="UK/USA Counsellor"
          stars="4.7"
          reviews="450"
        />
        {/* <DoctorCard
          img={profile4}
          name="Mr. Albert Flores"
          title="Hematologists"
          stars="4.8"
          reviews="500"
        /> */}
      </div>
    </div>
  );
}

export default Doctors;
