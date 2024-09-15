import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import '../Styles/Germany.css';
import germanyImage from '../Assets/images/StudyGermany.jpeg'
import { useNavigate } from "react-router-dom";

function GermanyStep2() {
    const navigate = useNavigate();
    const handleNextPage=()=>{
        navigate('/germany/step3');
    }
    const handlePreviousPage=()=>{
        navigate('/germany');
    }

  return (
    <div className="container">
      <Navbar />
      <main className="main-content">
        <section className="intro-section">
          <h1 className="heading-primary">Study in Germany</h1>
          <img src={germanyImage} alt="Germany" className="image-cover" />
          <p className="paragraph">
            Studying in Germany offers a high-quality education at a relatively low cost. Public universities often have low or no tuition fees, making it an affordable option for international students...
          </p>
        </section>

        <section className="educational-institutions">
          <h2 className="heading-secondary">Types of Educational Institutions</h2>
          <div className="institution-grid">
            <div className="card">
              <h3 className="heading-tertiary">Universities (Universitäten)</h3>
              <p>
                Offer a wide range of academic disciplines, including humanities, social sciences, natural sciences, and engineering...
              </p>
            </div>
            <div className="card">
              <h3 className="heading-tertiary">Universities of Applied Sciences (Fachhochschulen)</h3>
              <p>
                Focus on practical and professional education in fields like engineering, business, and social work...
              </p>
            </div>
            <div className="card">
              <h3 className="heading-tertiary">Art and Music Academies (Kunsthochschulen, Musikhochschulen)</h3>
              <p>
                Specialized institutions offering programs in visual arts, performing arts, music, and design...
              </p>
            </div>
            <div className="card">
              <h3 className="heading-tertiary">Technical Universities (Technische Universitäten, TUs)</h3>
              <p>
                Emphasize engineering and technological disciplines, combining theoretical and practical approaches...
              </p>
            </div>
          </div>
        </section>

        <section className="admission-requirements">
          <h2 className="heading-secondary">Admission Requirements</h2>
          <div className="requirement-list">
            <div className="card">
              <h3 className="heading-tertiary">Undergraduate (Bachelor's) Studies</h3>
              <p>
                German universities typically do not have a strict minimum GPA requirement for undergraduate admissions...
              </p>
            </div>
            <div className="card">
              <h3 className="heading-tertiary">Graduate (Master's) Studies</h3>
              <p>
                Many master's programs require a bachelor's degree with a good academic record...
              </p>
            </div>
            <div className="card">
              <h3 className="heading-tertiary">Doctoral (Ph.D.) Studies</h3>
              <p>
                For doctoral studies, universities generally focus more on your research experience, academic background...
              </p>
            </div>
          </div>
        </section>

        <section className="language-proficiency">
          <h2 className="heading-secondary">Language Proficiency</h2>
          <div className="proficiency-list">
            <div className="card">
              <h3 className="heading-tertiary">German-Taught Programs</h3>
              <p>
                TestDaF: Minimum score of 4 in each section...
              </p>
            </div>
            <div className="card">
              <h3 className="heading-tertiary">English-Taught Programs</h3>
              <p>
                TOEFL: Minimum score of 80-90 (internet-based test)...
              </p>
            </div>
          </div>
        </section>

        <section className="application-process">
          <h2 className="heading-secondary">Application Process</h2>
          <div className="application-list">
            <div className="card">
              <h3 className="heading-tertiary">University Application</h3>
              <p>
                Applications are usually submitted directly to the university or through a centralized application system...
              </p>
            </div>
            <div className="card">
              <h3 className="heading-tertiary">Documents Required</h3>
              <p>
                Commonly required documents include academic transcripts, proof of language proficiency, a motivational letter...
              </p>
            </div>
          </div>
        </section>

        <section className="tuition-fees">
          <h2 className="heading-secondary">Tuition Fees and Financial Support</h2>
          <div className="tuition-list">
            <div className="card">
              <h3 className="heading-tertiary">Public Universities</h3>
              <p>
                For most programs, public universities in Germany typically do not charge tuition fees for undergraduate programs...
              </p>
            </div>
            <div className="card">
              <h3 className="heading-tertiary">Private Universities</h3>
              <p>
                Private universities in Germany typically charge tuition fees, generally ranging from €5,000 to €20,000 per year...
              </p>
            </div>
          </div>
        </section>

        <section className="cost-of-living">
          <h2 className="heading-secondary">Cost of Living</h2>
          <p className="card">
            Monthly living costs in Germany are estimated to be between €700 and €1,000, covering accommodation, food, transportation, and personal expenses...
          </p>
        </section>

        <section className="student-life">
          <h2 className="heading-secondary">Student Life</h2>
          <p className="card">
            Universities offer various services, including academic advising, career counseling, and student organizations...
          </p>
        </section>

        <section className="post-graduation">
          <h2 className="heading-secondary">Post-Graduation Opportunities</h2>
          <p className="card">
            Germany has a strong job market, especially in sectors like engineering, IT, and business. Graduates often have good prospects for finding employment...
          </p>
        </section>

        <section className="top-universities">
          <h2 className="heading-secondary">Top 10 Public Universities</h2>
          <ul className="university-list">
            <li><strong>Technical University of Munich (TUM)</strong> - Munich: Engineering, natural sciences, technology, and business.</li>
            <li><strong>University of Heidelberg</strong> - Heidelberg: Humanities, social sciences, life sciences, and medicine.</li>
            <li><strong>Humboldt University of Berlin</strong> - Berlin: Humanities, social sciences, natural sciences, and law.</li>
            <li><strong>University of Freiburg</strong> - Freiburg: Environmental sciences, life sciences, humanities, and engineering.</li>
            <li><strong>RWTH Aachen University</strong> - Aachen: Engineering, technology, and natural sciences.</li>
            <li><strong>University of Mannheim</strong> - Mannheim: Business, economics, social sciences, and humanities.</li>
            <li><strong>University of Göttingen</strong> - Göttingen: Natural sciences, social sciences, and humanities.</li>
            <li><strong>University of Stuttgart</strong> - Stuttgart: Engineering, natural sciences, and automotive technology.</li>
            <li><strong>Technical University of Berlin (TU Berlin)</strong> - Berlin: Engineering, technology, and computer science.</li>
            <li><strong>University of Leipzig</strong> - Leipzig: Humanities, social sciences, and natural sciences.</li>
          </ul>
        </section>
      </main>
      <div className="pagination">
          
          <button className="previousBtn" onClick={handlePreviousPage}>Previous Page</button>
          <button className="nextBtn" onClick={handleNextPage}>Next Page</button>
      
  </div>
      <Footer />
    </div>
  );
}

export default GermanyStep2;
