import React from 'react'
import './AboutUs.css'

const stats = [
    { value: '22', label: 'Hospitals' },
    { value: '175', label: 'Medical Centers' },
    { value: '20', label: 'Fertility Centers' },
    { value: '8,000+', label: 'Beds' },
    { value: '6.1M', label: 'Medical Visits' },
    { value: '2M', label: 'Patients / Year' },
    { value: '10', label: 'Public-Private Partnerships' },
    { value: '91', label: 'Medical Labs' },
    { value: '92M', label: 'Lab Tests / Year' },
    { value: '10,000+', label: 'Employees' },
]

function AboutUs() {
    return (
        <div className="about-page">

            <div className="about-hero">
                <img
                    className="about-hero-img"
                    src="/images/hospital-hero.jpg"
                    alt="VJ Hospitals"
                />
                <div className="about-hero-overlay" />
                <div className="about-hero-content">
                    <h1 className="about-hero-heading">About VJ Hospitals</h1>
                    <p className="about-hero-sub">Caring for your health is all we do</p>
                </div>
            </div>

            <section className="about-section">
                <div className="container">
                    <h2 className="about-section-title">Who We Are</h2>
                    <p className="about-body">
                        VJ Hospitals is a globally recognised healthcare brand with operations in 8 countries:
                        Germany, Sweden, Poland, Turkey, Hungary, Romania, Serbia, Ukraine, and India.
                    </p>
                    <p className="about-body">
                        VJ Hospitals is the leading Multispecialty Hospital chain in India and one of the largest
                        healthcare providers in Europe. The Group provides a broad spectrum of healthcare services
                        and has an extensive network of clinics, hospitals, specialty care facilities, Fertility
                        Centers, and diagnostic labs.
                    </p>
                    <p className="about-body">
                        Spread across Telangana, Andhra Pradesh, and Maharashtra, VJ Hospitals treats millions of
                        patients every year with a clear focus on raising the standards of healthcare in India,
                        using the greatest technologies and international evidence-based protocols.
                    </p>
                </div>
            </section>

            <section className="about-stats-section">
                <div className="container">
                    <h2 className="about-section-title">VJ Hospitals in Numbers</h2>
                    <div className="about-stats-grid">
                        {stats.map((stat, i) => (
                            <div className="about-stat-card" key={i}>
                                <span className="about-stat-value">{stat.value}</span>
                                <span className="about-stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="about-section">
                <div className="container">
                    <h2 className="about-section-title">From the Desk of Our CEO</h2>
                    <div className="row align-items-center g-5">
                        <div className="col-md-4">
                            <div className="about-ceo-img-wrap">
                                <img
                                    src="/images/ceo.jpg"
                                    alt="CEO VJ Hospitals"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <blockquote className="about-ceo-quote">
                                <p>
                                    "Our aim is to expand pan-India and overseas, and deliver European standard
                                    healthcare excellence to everyone in need of quality healthcare. Our mission
                                    is: Caring for your health is all we do - and our vision is to be globally
                                    recognized for excellence in patient-centric healthcare, multi super-specialty
                                    expertise with precision treatment, affordable to all patients."
                                </p>
                                <cite>- CEO, VJ Hospitals</cite>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AboutUs
