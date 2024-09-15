import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import '../Styles/Germany.css';
import { useNavigate } from "react-router-dom";

const AboutGermany = [
    {
      "id": 1,
      "title": "High-Quality Education",
      "details": [
        {
          "point": "World-Renowned Institutions",
          "description": "Germany is home to some of the world’s top universities and research institutions, such as LMU Munich, Heidelberg University, and the Technical University of Munich."
        },
        {
          "point": "Diverse Programs",
          "description": "The country offers a wide range of programs in various fields, including engineering, humanities, sciences, and business."
        }
      ]
    },
    {
      "id": 2,
      "title": "Low or No Tuition Fees",
      "details": [
        {
          "point": "Affordable Education",
          "description": "Public universities in Germany often charge very low or no tuition fees, making higher education more accessible compared to other countries."
        }
      ]
    },
    {
      "id": 3,
      "title": "Strong Emphasis on Research",
      "details": [
        {
          "point": "Innovation",
          "description": "Germany is known for its strong focus on research and development, providing students with opportunities to engage in cutting-edge projects and work with leading experts."
        }
      ]
    },
    {
      "id": 4,
      "title": "Internationally Recognized Degrees",
      "details": [
        {
          "point": "Global Acceptance",
          "description": "Degrees from German universities are widely recognized and respected around the world, which can enhance your career prospects internationally."
        }
      ]
    },
    {
      "id": 5,
      "title": "Cultural and Linguistic Diversity",
      "details": [
        {
          "point": "Cultural Experience",
          "description": "Germany offers a rich cultural experience with its history, art, and festivals. Students can also interact with people from diverse backgrounds."
        },
        {
          "point": "Language Skills",
          "description": "Studying in Germany provides an opportunity to learn or improve German, a language that is valuable in the European job market."
        }
      ]
    },
    {
      "id": 6,
      "title": "Strong Economy and Job Market",
      "details": [
        {
          "point": "Economic Powerhouse",
          "description": "Germany is Europe’s largest economy and has a robust job market, especially in sectors like engineering, IT, and business."
        },
        {
          "point": "Work Opportunities",
          "description": "International students often have the opportunity to work part-time during their studies and can find internships and job opportunities after graduation."
        }
      ]
    },
    {
      "id": 7,
      "title": "High Standard of Living",
      "details": [
        {
          "point": "Quality of Life",
          "description": "Germany offers a high standard of living with good infrastructure, healthcare, and safety. Cities like Berlin, Munich, and Hamburg are known for their quality of life and vibrant cultural scenes."
        }
      ]
    },
    {
      "id": 8,
      "title": "Support for International Students",
      "details": [
        {
          "point": "Student Services",
          "description": "Many universities have dedicated international offices that provide support with visa issues, accommodation, and integration into student life."
        },
        {
          "point": "Scholarships and Grants",
          "description": "There are numerous scholarships and financial aid options available for international students."
        }
      ]
    },
    {
      "id": 9,
      "title": "Geographical Location",
      "details": [
        {
          "point": "Central Europe",
          "description": "Germany’s central location in Europe makes it easy to travel to other European countries, enhancing the overall experience of studying abroad."
        }
      ]
    },
    {
      "id": 10,
      "title": "Sustainability and Innovation",
      "details": [
        {
          "point": "Green Initiatives",
          "description": "Germany is a leader in sustainability and environmental technology, making it an ideal place for students interested in these fields."
        }
      ]
    }
  ];
  
  
  function Germany() {
    const navigate = useNavigate();
        const handleNextPage=()=>{
            navigate('/germany/step2')
        }

   
    return (
      <div className="home-section">
        <Navbar />
        <div className="countryContainer">
          {AboutGermany?.map((item, index) => (
            <div className="countryDescriptionCard" key={index}>
              <div className="header">
                <span className="id">{item?.id}</span>
                <span className="title">{item?.title}</span>
              </div>
              {item?.image && <img src={item?.image} alt={item?.title} className="descriptionImage" />}
              {item?.details?.map((detail, idx) => (
                <div className="detailSection" key={idx}>
                  <strong className="point">{detail?.point}</strong>
                  <span className="description">{detail?.description}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="pagination">
          
                <button className="nextBtn" onClick={handleNextPage}>Next Page</button>
            
        </div>
        <Footer />
      </div>
    );
  }
  
  export default Germany;
  