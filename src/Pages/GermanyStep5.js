import React, { useEffect } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import '../Styles/Germany6.css';
import { useNavigate } from "react-router-dom";


function GermanyStep5() {
    const navigate = useNavigate();
    const handleNextPage = () => {
        navigate('/germany/step6');
    }
    const handlePreviousPage = () => {
        navigate('/germany/step4');
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="germany-step5-container">
            <Navbar />
            <div className="germany-step5-main-content">
                <h1 className="germany-step5-heading-primary">Au Pairing in Germany and Other European Countries</h1>

                <section className="germany-step5-section">
                    <h2 className="germany-step5-heading-secondary">Au Pairs</h2>
                    <p className="germany-step5-description">
                        Au pairs are individuals, often from another country, who live with a host family and provide child care in exchange for room, board, and a stipend. They’re usually between the ages of 18 and 30, and their role is to assist with child care and sometimes light housework while gaining cultural experience and improving language skills. The arrangement benefits both the au pair and the host family.
                    </p>
                </section>

                <section className="germany-step5-section">
                    <h2 className="germany-step5-heading-secondary">Au Pairing in Germany</h2>
                    <h3 className="germany-step5-heading-tertiary">1. Responsibilities:</h3>
                    <ul className="germany-step5-list">
                        <li><strong>Child Care:</strong> Includes duties like taking children to school, helping with homework, playing, and organizing activities.</li>
                        <li><strong>Household Help:</strong> Light tasks related to the children’s care, such as preparing meals for them and tidying up their rooms.</li>
                    </ul>

                    <h3 className="germany-step5-heading-tertiary">2. Working Hours and Conditions:</h3>
                    <ul className="germany-step5-list">
                        <li><strong>Hours:</strong> Generally 30-40 hours per week.</li>
                        <li><strong>Accommodation and Meals:</strong> Au pairs are provided with a private room and meals. Some families also offer access to public transportation.</li>
                    </ul>

                    <h3 className="germany-step5-heading-tertiary">3. Compensation and Benefits:</h3>
                    <ul className="germany-step5-list">
                        <li><strong>Allowance:</strong> The monthly stipend is usually around €280-€350.</li>
                        <li><strong>Language and Cultural Experience:</strong> Opportunity to attend language courses and explore German culture. Travel within Germany and the EU is also possible.</li>
                    </ul>

                    <h3 className="germany-step5-heading-tertiary">4. Legal and Visa Requirements:</h3>
                    <ul className="germany-step5-list">
                        <li><strong>Visa:</strong> Requires a specific au pair visa. The au pair must be between 18 and 26 years old and have a host family agreement.</li>
                        <li><strong>Regulations:</strong> Governed by the Federal Office for Migration and Refugees (BAMF), with clear guidelines ensuring fair working conditions and legal protections.</li>
                    </ul>

                    <h3 className="germany-step5-heading-tertiary">5. Support and Resources:</h3>
                    <ul className="germany-step5-list">
                        <li><strong>Agencies:</strong> Numerous agencies provide support for finding a host family and navigating the visa process.</li>
                        <li><strong>Community:</strong> Opportunities to connect with other au pairs through organized events and online networks.</li>
                    </ul>
                </section>

                <section className="germany-step5-section">
                    <h2 className="germany-step5-heading-secondary">Au Pairing in Other European Countries</h2>

                    <h3 className="germany-step5-heading-tertiary">1. General Responsibilities:</h3>
                    <ul className="germany-step5-list">
                        <li><strong>Child Care:</strong> Similar to Germany—taking care of children, assisting with schoolwork, and engaging in activities.</li>
                        <li><strong>Household Help:</strong> Light household chores related to the children’s care.</li>
                    </ul>

                    <h3 className="germany-step5-heading-tertiary">2. Working Hours and Conditions:</h3>
                    <ul className="germany-step5-list">
                        <li><strong>Hours:</strong> Typically 25-35 hours per week, though this can vary by country.</li>
                        <li><strong>Accommodation and Meals:</strong> Usually provided by the host family.</li>
                    </ul>

                    <h3 className="germany-step5-heading-tertiary">3. Compensation and Benefits:</h3>
                    <ul className="germany-step5-list">
                        <li><strong>Allowance:</strong> Varies by country. For example:</li>
                        <ul className="germany-step5-nested-list">
                            <li><strong>France:</strong> Around €320-€340 per month.</li>
                            <li><strong>Spain:</strong> About €250-€300 per month.</li>
                            <li><strong>Netherlands:</strong> Approximately €300-€340 per month.</li>
                        </ul>
                        <li><strong>Language and Cultural Experience:</strong> Opportunities to learn the local language and experience the culture.</li>
                    </ul>

                    <h3 className="germany-step5-heading-tertiary">4. Legal and Visa Requirements:</h3>
                    <ul className="germany-step5-list">
                        <li><strong>Visa:</strong> Most European countries have specific au pair visas with age restrictions (usually 18-30 years old).</li>
                        <li><strong>Regulations:</strong> Each country has its own regulations, generally including limits on working hours and stipends.</li>
                    </ul>

                    <h3 className="germany-step5-heading-tertiary">5. Support and Resources:</h3>
                    <ul className="germany-step5-list">
                        <li><strong>Agencies:</strong> Many countries have agencies that help with placement and offer support.</li>
                        <li><strong>Community:</strong> Various online forums and social media groups help au pairs connect and share experiences.</li>
                    </ul>
                </section>

                <section className="germany-step5-section">
                    <h2 className="germany-step5-heading-secondary">Country-Specific Highlights</h2>
                    <div className="germany-step5-country-highlights">
                        <div className="germany-step5-highlight">
                            <h3 className="germany-step5-heading-tertiary">France</h3>
                            <p>Au pairs typically work 30-35 hours per week and receive a monthly allowance of around €320-€340. Cultural immersion includes French language and cuisine, with opportunities to travel across Europe.</p>
                        </div>

                        <div className="germany-step5-highlight">
                            <h3 className="germany-step5-heading-tertiary">Spain</h3>
                            <p>Work hours are usually around 25-30 hours per week with a stipend of approximately €250-€300. Spain offers a rich cultural experience with its history, festivals, and cuisine.</p>
                        </div>

                        <div className="germany-step5-highlight">
                            <h3 className="germany-step5-heading-tertiary">Netherlands</h3>
                            <p>Au pairs work around 30-40 hours per week and earn €300-€340 per month. The Netherlands is known for its high standard of living and excellent public transport, making it easy to explore.</p>
                        </div>

                        <div className="germany-step5-highlight">
                            <h3 className="germany-step5-heading-tertiary">Italy</h3>
                            <p>Responsibilities and benefits are similar, with au pairs working about 30-35 hours per week and receiving around €250-€300 per month. Italy offers a vibrant cultural experience, with numerous historical sites and beautiful landscapes.</p>
                        </div>
                    </div>
                </section>

                <section className="germany-step5-section">
                    <h2 className="germany-step5-heading-secondary" style={{marginTop:"10px"}}>General Tips for All European Countries</h2>
                    <ul className="germany-step5-list">
                        <li><strong>Research Requirements:</strong> Understand the specific visa requirements and regulations for each country.</li>
                        <li><strong>Clear Agreements:</strong> Ensure all expectations and responsibilities are clearly outlined in a written agreement with the host family.</li>
                        <li><strong>Cultural Adaptation:</strong> Be prepared to adapt to different cultural norms and practices.</li>
                    </ul>
                </section>

                {/* Pagination Buttons */}
                <div className="pagination">
                    <button className="previousBtn" onClick={handlePreviousPage}>Previous</button>
                    <button className="nextBtn" onClick={handleNextPage}>Next</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default GermanyStep5;


