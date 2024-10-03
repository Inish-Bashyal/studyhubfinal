import React, { useEffect } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import '../Styles/Germany4.css';
import { useNavigate } from "react-router-dom";


function GermanyStep6() {
    const navigate = useNavigate();
    const handleNextPage = () => {
        navigate('/germany/step7');
    }
    const handlePreviousPage = () => {
        navigate('/germany/step5');
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="germany-container">
        <Navbar />
        <div className="germany-main-content">
            <section className="opportunity-card">
                <h2 className="opportunity-title">Opportunity Card (Chancenkarte)</h2>
                <p className="opportunity-description">
                    The Opportunity Card is a new initiative by Germany, designed to attract skilled workers from non-EU countries, such as Nepal, to help address labor shortages and contribute to the German economy. 
                </p>

                <h3 className="opportunity-subtitle">Key Features</h3>
                <ul className="opportunity-features">
                    <li><strong>Points-Based System:</strong> Applicants are evaluated on qualifications, experience, language skills, and age.</li>
                    <li><strong>Eligibility:</strong> Higher education degrees or relevant work experience is necessary, with language proficiency in German or English helping your score.</li>
                    <li><strong>Application Process:</strong> A points assessment determines eligibility, followed by submission of your application and required documents.</li>
                </ul>

                <h3 className="opportunity-subtitle">Steps for Nepalese Applicants</h3>
                <ol className="application-steps">
                    <li><strong>Check Eligibility:</strong> Ensure that your qualifications meet the requirements, and work on improving your language skills if necessary.</li>
                    <li><strong>Prepare Documentation:</strong> Gather educational credentials, work experience proofs, and language proficiency certificates.</li>
                    <li><strong>Points Assessment:</strong> Estimate your points and try to enhance your qualifications or skills if needed to increase your chances.</li>
                    <li><strong>Submit Application:</strong> Follow the procedure as per German immigration requirements and wait for approval.</li>
                    <li><strong>Visa and Relocation:</strong> Once approved, apply for the visa and start planning your move, including accommodation and understanding local conditions.</li>
                </ol>

                <h3 className="opportunity-subtitle">Benefits of the Opportunity Card</h3>
                <ul className="opportunity-benefits">
                    <li><strong>Streamlined Immigration:</strong> The card simplifies the process of moving to Germany for skilled workers.</li>
                    <li><strong>Career Growth:</strong> It opens doors for professional development and living in a country with a high standard of living.</li>
                    <li><strong>Economic Contribution:</strong> You can contribute to the thriving German economy and enjoy personal career advancements.</li>
                </ul>

                <p className="opportunity-note">
                    <strong>Note:</strong> The Opportunity Card requirements may change, so always check with official sources like the <a href="https://kathmandu.diplo.de/np-en" className="official-link">German Embassy</a> or consult immigration experts for the most up-to-date information.
                </p>
                <div className="pagination">
                    <button className="previousBtn" onClick={handlePreviousPage}>Previous Page</button>
                    <button className="nextBtn" onClick={handleNextPage}>Next Page</button>
                </div>
            </section>

            {/* Pagination Buttons */}
        </div>
        <Footer />
    </div>
);
}

export default GermanyStep6;
