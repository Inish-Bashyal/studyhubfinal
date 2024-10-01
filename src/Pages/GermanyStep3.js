import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import '../Styles/Germany2.css';
import { useNavigate } from "react-router-dom";

function GermanyStep3() {
    const navigate = useNavigate();
    const handleNextPage = () => {
        navigate('/germany/step4');
    }
    const handlePreviousPage = () => {
        navigate('/germany/step2');
    }

    return (
        <div className="container">
            <Navbar />
            <section className="ausbildung-section">
                <h1 className="ausbildung-title">Ausbildung in Germany</h1>
                
                <div className="ausbildung-content">
                    <div className="ausbildung-overview">
                        <h2 className="subheading">Ausbildung:</h2>
                        <ul>
                            <li><strong>Vocational Training:</strong> Ausbildung is a structured program aimed at preparing individuals for specific trades or professions through hands-on work experience and classroom-based learning.</li>
                            <li><strong>Dual System:</strong> It typically follows a "dual system" where the training takes place both at a vocational school (Berufsschule) and within a company (Betrieb).</li>
                            <li><strong>Duration:</strong> The program usually lasts between 2 to 3.5 years, depending on the profession and individual progress.</li>
                            <li><strong>Certification:</strong> Successful completion of an Ausbildung leads to a recognized vocational qualification or certification.</li>
                            <li><strong>Employment Relationship:</strong> During the training, apprentices are employed by the company, earning a salary that usually increases with each year of training.</li>
                        </ul>
                    </div>
                    
                    <div className="ausbildung-structure">
                        <h2 className="subheading">1. Structure of Ausbildung:</h2>
                        <div className="structure-content">
                            <div className="structure-item">
                                <h3>• Duration:</h3>
                                <p>Most Ausbildung programs last between 2 to 3.5 years, depending on the profession and individual progress.</p>
                            </div>
                            <div className="structure-item">
                                <h3>• Dual System:</h3>
                                <div className="dual-system">
                                    <h4>Vocational School (Berufsschule):</h4>
                                    <ul>
                                        <li><strong>Theoretical Education:</strong> Provides the theoretical background and knowledge required for a specific trade or profession.</li>
                                        <li><strong>General Education:</strong> Includes general education subjects like economics, law, and communication skills.</li>
                                    </ul>
                                    <h4>Company (Betrieb):</h4>
                                    <ul>
                                        <li><strong>Hands-On Experience:</strong> Offers practical skills and knowledge specific to the trade or profession.</li>
                                        <li><strong>Mentorship:</strong> Experienced professionals or mentors guide apprentices, helping them develop their skills and understand the industry.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="ausbildung-application">
                        <h2 className="subheading">2. Application Process:</h2>
                        <ul>
                            <li><strong>Research:</strong> Start by researching different professions and companies offering Ausbildung.</li>
                            <li><strong>General Requirements:</strong>
                                <ul>
                                    <li><strong>Educational Background:</strong> Typically a secondary school diploma or equivalent.</li>
                                    <li><strong>Language Proficiency:</strong> Proficiency in German is crucial, usually at least B1 level.</li>
                                    <li><strong>Application Materials:</strong> Resume, cover letter, certificates, and transcripts.</li>
                                </ul>
                            </li>
                            <li><strong>Application:</strong> Apply directly to companies or through online job portals.</li>
                        </ul>
                    </div>

                    <div className="ausbildung-professions">
                        <h2 className="subheading">3. Common Professions:</h2>
                        <ul>
                            <li><strong>Trade Professions:</strong> Electrician, carpenter, plumber.</li>
                            <li><strong>Commercial Professions:</strong> Retail salesperson, office clerk, industrial clerk.</li>
                            <li><strong>Technical Professions:</strong> IT specialist, mechanical engineer, automotive mechatronics.</li>
                        </ul>
                    </div>

                    <div className="ausbildung-benefits">
                        <h2 className="subheading">4. Benefits:</h2>
                        <ul>
                            <li><strong>Qualification:</strong> You'll gain a recognized vocational qualification upon completion.</li>
                            <li><strong>Earnings:</strong> Salaries typically range from €800 to €1,500 per month, increasing with each year of training.</li>
                            <li><strong>Employment:</strong> Many apprentices are offered permanent positions with their training companies.</li>
                        </ul>
                    </div>

                    <div className="ausbildung-language">
                        <h2 className="subheading">5. Language Skills:</h2>
                        <ul>
                            <li><strong>Basic Requirement:</strong> Most programs require at least a B1 level of German proficiency.</li>
                            <li><strong>Higher Levels:</strong> Some professions may require higher levels of proficiency.</li>
                        </ul>
                    </div>

                    <div className="ausbildung-after">
                        <h2 className="subheading">6. After Ausbildung:</h2>
                        <ul>
                            <li><strong>Entering the Workforce:</strong> Most apprentices are offered full-time positions.</li>
                            <li><strong>Further Education:</strong> Consider pursuing additional qualifications or higher education.</li>
                            <li><strong>Professional Development:</strong> Engage in courses and professional associations.</li>
                            <li><strong>Career Advancement:</strong> Specialize or move into management roles.</li>
                            <li><strong>Entrepreneurship:</strong> Consider starting your own business.</li>
                            <li><strong>Networking:</strong> Build professional connections and seek mentorship.</li>
                            <li><strong>International Opportunities:</strong> Explore job opportunities abroad.</li>
                            <li><strong>Life Balance:</strong> Maintain a healthy work-life balance.</li>
                        </ul>
                    </div>

                    <div className="ausbildung-intake">
                        <h2 className="subheading">Intake Periods for Ausbildung:</h2>
                        <ul>
                            <li><strong>Start Date:</strong> Most programs start in early September or October.</li>
                            <li><strong>Application Deadlines:</strong> Applications are often submitted between April and July.</li>
                        </ul>
                    </div>
                    
                    <div className="ausbildung-checklist">
                        <h2 className="subheading">BASIC CHECKLIST:</h2>
                        <ul>
                            <li><strong>Research Programs:</strong> Identify industries and companies offering Ausbildung.</li>
                            <li><strong>Check Requirements:</strong> Review prerequisites for each program.</li>
                            <li><strong>Prepare Documents:</strong> Resume, cover letter, certificates, and references.</li>
                            <li><strong>Apply:</strong> Apply 6-12 months before the start date.</li>
                            <li><strong>Prepare for Interviews:</strong> Be ready to discuss your motivation and fit for the program.</li>
                            <li><strong>Secure Accommodation:</strong> Arrange housing if necessary.</li>
                            <li><strong>Language Proficiency:</strong> Ensure sufficient German language skills.</li>
                            <li><strong>Follow Up:</strong> Contact companies if you don’t hear back.</li>
                            <li><strong>Plan for Start:</strong> Prepare for the transition into the vocational training program.</li>
                        </ul>
                    </div>
                </div>
                
                <div className="pagination">
                    <button className="previousBtn" onClick={handlePreviousPage}>Previous Page</button>
                    <button className="nextBtn" onClick={handleNextPage}>Next Page</button>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default GermanyStep3;
