import React from 'react'
import './Home.css'

const articles = [
    {
        date: 'March 13, 2022',
        img: '/images/news-1.jpg',
        title: 'India registers 3,116 new COVID-19 cases, 47 fatalities',
        href: 'https://health.economictimes.indiatimes.com/news/industry/india-registers-3116-new-covid-19-cases-47-fatalities/90180395',
    },
    {
        date: 'January 1, 2022',
        img: '/images/news-2.jpg',
        title: "VJ Hospitals ranked as India's no.1 multi-speciality hospital of 2021",
        href: 'https://www.healthprice.in/top/best-multispecialty-hospitals-in-india',
    },
    {
        date: 'August 2021',
        img: '/images/news-3.jpg',
        title: 'VJ Hospital Takes Holistic Approach to Technology',
        href: 'https://www.wsj.com/articles/new-stanford-hospital-takes-holistic-approach-to-technology-11573905600',
    },
];

function Info() {
  return (
    <section className="insights-section">
        <div className="container">
            <h2>Latest Insights</h2>
            <div className="row g-4">
                {articles.map((article, i) => (
                    <div className="col-md-4" key={i}>
                        <div className="insight-card">
                            <img className="insight-card-img" src={article.img} alt={article.title} />
                            <div className="insight-card-body">
                                <div className="insight-date">{article.date}</div>
                                <a
                                    className="insight-link"
                                    href={article.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {article.title} &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a
                className="insights-more-btn"
                href="https://health.economictimes.indiatimes.com/latest-news"
                target="_blank"
                rel="noopener noreferrer"
            >
                More news &rarr;
            </a>
        </div>
    </section>
  )
}

export default Info