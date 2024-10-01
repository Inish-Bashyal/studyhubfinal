import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import '../Styles/Germany5.css';
import { useNavigate } from "react-router-dom";


function GermanyStep7() {
    const navigate = useNavigate();
   
    const handlePreviousPage = () => {
        navigate('/germany/step6');
    }

    return (
        <>
        <Navbar />
        <div className="container">
            <div className="main-content">
                <section className="visa-checklist-section">
                    <h2 className="visa-checklist-title">GERMAN STUDENT VISA CHECKLIST</h2>

                    <h3 className="visa-checklist-subtitle">For Application Process</h3>
                    <ul className="visa-checklist-list">
                        <li>Academic document of SLC/ +2 or higher education (Provisional, Character, Marksheet)</li>
                        <li>Passport</li>
                        <li>Recommendation letter</li>
                        <li>Experience Certificate</li>
                        <li>CV</li>
                        <li>Motivational letter</li>
                        <li>For bachelor's: language certificate B1 / for master's: IELTS certificate not less than B2</li>
                    </ul>

                    <h3 className="visa-checklist-subtitle">Applying to University through uni assist:</h3>
                    <p className="visa-checklist-info">
                        The evaluation of your educational certificates and the checking of further admission criteria by uni-assist costs EUR 75.00 for your first desired course of study in an application semester. Each additional desired course of study in the same semester costs EUR 30.00.
                    </p>

                    <h3 className="visa-checklist-subtitle">Next Steps</h3>
                    <ul className="visa-checklist-list">
                        <li>Attend College Interview via Skype (Create your own Skype ID and provide it to us.)</li>
                        <li>Get an offer letter, then visa processing occurs.</li>
                    </ul>

                    <h3 className="visa-checklist-subtitle">Total Costs:</h3>
                    <ul className="visa-checklist-costs">
                        <li>No Objection letter: <strong>NRs 2000</strong> Payable to the Ministry of Education</li>
                        <li>Visa fee: <strong>75 EUR</strong> (Payable at the German Embassy)</li>
                        <li>Draft letter fee: <strong>25 EUR</strong> (Payable at the German Embassy)</li>
                        <li>Blocked Account Amount: <strong>10,600 EUR</strong> (One year living cost in advance)</li>
                        <li>Travel Mediclaim Insurance: <strong>70 USD</strong> (Required for issuance of Visa)</li>
                        <li>Airfare: <strong>NRs 45,000 - 50,000</strong> (Can vary depending on the airlines and season)</li>
                        <li>Initial Settlement Expenses: <strong>maybe 1,000 USD</strong> (For payment of room rent & deposit)</li>
                    </ul>

                    <h3 className="visa-checklist-subtitle">Create an Appointment for Embassy Interview</h3>
                    <p className="visa-checklist-info">
                        While attending the Embassy Interview, the following documents are required:
                    </p>
                    <ul className="visa-checklist-list">
                        <li>Valid passport or travel document (with a validity of at least 12 months)</li>
                        <li>3 recent biometrical passport photographs (not older than six months)</li>
                        <li>2 Visa application forms (filled and signed)</li>
                        <li>Signed Declaration on True and Complete Information</li>
                        <li>Copy of your passport’s data page + last page</li>
                        <li>Citizenship Certificate original and 2 copies</li>
                        <li>Self-written letter of motivation explaining your reasons for studying in Germany</li>
                        <li>Proof of admission to the relevant University or Institution</li>
                        <li>School Leaving Certificate and mark-sheets</li>
                        <li>Higher Secondary Education Board Certificate and mark-sheets</li>
                        <li>Proof of previous studies (e.g., Bachelor Degree, transcripts)</li>
                        <li>Proof of knowledge of the German or English language (if required by the university)</li>
                    </ul>

                    <p className="visa-checklist-note">
                        Please prepare two identical sets of applications with the above-mentioned documents and bring your original documents along. All documents must be in the given order, in original, copies in DIN A4 format, and any documents in Nepali language must be supported by an English or German translation.
                    </p>

                    <h3 className="visa-checklist-good-luck">GOOD LUCK !!!!</h3>
                <div className="pagination">
                    <button className="previousBtn" onClick={handlePreviousPage}>Previous Page</button>
                </div>
                </section>

                {/* Pagination Buttons */}
            </div>
            <Footer />
        </div>
        </>
    
);
}

export default GermanyStep7;
