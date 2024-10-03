import React, { useEffect } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import '../Styles/Germany3.css';
import { useNavigate } from "react-router-dom";


function GermanyStep4() {
    const navigate = useNavigate();
    const handleNextPage = () => {
        navigate('/germany/step5');
    }
    const handlePreviousPage = () => {
        navigate('/germany/step3');
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
            <>
            <Navbar />
            <div className="container">
            <div className="main-content">
                <h1 className="heading-primary">FSJ and BFD in Germany</h1>

                {/* FSJ Section */}
                <section className="program-section">
                    <h2 className="heading-secondary">Freiwilliges Soziales Jahr (FSJ)</h2>
                    <p className="program-purpose"><strong>Purpose:</strong> The FSJ is designed for young people to engage in social or cultural activities, gaining experience and contributing to society before pursuing further education or entering the workforce.</p>

                    <div className="program-details">
                        <p><strong>Duration:</strong> Typically 12 months, with some flexibility for shorter or longer programs.</p>
                        <p><strong>Eligibility:</strong> Generally for individuals aged 16 to 27, without specific educational requirements.</p>
                        <p><strong>Types of Work:</strong> Includes work in hospitals, kindergartens, nursing homes, cultural institutions, and social services.</p>
                        <p><strong>Benefits:</strong> Monthly stipend, accommodation options, insurance, education, and a certificate upon completion.</p>
                    </div>

                    <h3 className="heading-tertiary">Application Process</h3>
                    <ol className="application-steps">
                        <li>Research: Look for FSJ positions through various organizations or FSJ agencies.</li>
                        <li>Application: Apply directly with a resume, cover letter, and references.</li>
                        <li>Selection: Organizations may hold interviews for selection.</li>
                        <li>Placement: Once accepted, you'll receive your placement details.</li>
                    </ol>
                </section>

                {/* BFD Section */}
                <section className="program-section">
                    <h2 className="heading-secondary">Bundesfreiwilligendienst (BFD)</h2>
                    <p className="program-purpose"><strong>Purpose:</strong> The BFD allows people of all ages to engage in voluntary work in social, ecological, or cultural sectors, fostering personal development.</p>

                    <div className="program-details">
                        <p><strong>Duration:</strong> Typically 6 to 18 months, with flexible arrangements.</p>
                        <p><strong>Eligibility:</strong> Open to individuals aged 16 and above, including retirees.</p>
                        <p><strong>Types of Work:</strong> Includes work in social services, environmental protection, community services, and cultural institutions.</p>
                        <p><strong>Benefits:</strong> Monthly stipend, accommodation options, insurance, education, and a certificate upon completion.</p>
                    </div>

                    <h3 className="heading-tertiary">Application Process</h3>
                    <ol className="application-steps">
                        <li>Research: Find BFD opportunities through official agencies or organizations.</li>
                        <li>Application: Apply with a resume, cover letter, and references.</li>
                        <li>Selection: Organizations may hold interviews or assessments for selection.</li>
                        <li>Placement: Once accepted, you'll receive your placement details.</li>
                    </ol>
                </section>

                {/* Pagination Buttons */}
                <div className="pagination">
                    <button className="previousBtn" onClick={handlePreviousPage}>Previous Page</button>
                    <button className="nextBtn" onClick={handleNextPage}>Next Page</button>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default GermanyStep4;
