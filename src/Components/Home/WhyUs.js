import React from 'react'
import './Home.css'

function WhyUs() {
    return (
        <section className="whyus-section">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6">
                        <div className="whyus-image-wrap">
                            <img
                                src="/images/why-choose.png"
                                alt="Why choose VJ Health Care"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 whyus-text">
                        <h2>Why Choose VJ Health Care?</h2>
                        <p>
                            VJ Health Care is no ordinary health system. As part of VJ Medicine and the larger VJ
                            University family, we provide care as an academic medical center, combining clinical
                            care, research and teaching to advance medicine.
                        </p>
                        <p>
                            Our team of doctors and scientists harness the resources of one of the world's leading
                            universities to create breakthroughs in diagnosis and treatment. Together, they are
                            working to translate scientific insights into real-world solutions that can positively
                            impact your health.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs
