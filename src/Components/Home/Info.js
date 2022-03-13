import React from 'react'
import './home.css'

function Info() {
  return (
    <div className="container pt-4 pb-4">
        <p className="display-6 head-clr text-center">
            Get the latest insights!
        </p>
        <div className="row">
            <div className="cols col-md-4 pb-3">
                <img className="img-fluid" src="https://etimg.etb2bimg.com/photo/90180380.cms" alt="" />
                <div className=''>MARCH 13, 2022</div>
                <a className="link-secondary" href="https://health.economictimes.indiatimes.com/news/industry/india-registers-3116-new-covid-19-cases-47-fatalities/90180395" target="_blank" rel="noopener noreferrer"><p className="text-center">India registers 3,116 new COVID-19 cases, 47 fatalities →</p></a>
            </div>
            <div className="cols col-md-4 pb-3">
                <img className="img-fluid" src="https://stanfordhealthcare.org/content/shc/en-tools/nsh/newsroom/_jcr_content/test-fullwidth/general_container/parsyscontainer/columns/parsysleft/imagewithcaption/image.img.full.high.jpg/1574035785639.jpg" alt="" />
                <div className=''>JANUARY 1, 2022</div>
                <a className="link-secondary" target="_blank" rel="noopener noreferrer" href="https://www.healthprice.in/top/best-multispecialty-hospitals-in-india"><p className="text-center">VJ Hospitals ranked as India's no.1 multi-speciality hospital of 2021 →</p></a>
            </div>
            <div className="cols col-md-4 pb-3">
                <img className="img-fluid" src="https://stanfordhealthcare.org/content/shc/en-tools/nsh/newsroom/_jcr_content/test-fullwidth/general_container/parsyscontainer/columns/parsyscenter/imagewithcaption/image.img.full.high.jpg/1574037821859.jpg" alt="" />
                <div className=''>AUGUST 2021</div>
                <a className="link-secondary" target="_blank" rel="noopener noreferrer" href="https://www.wsj.com/articles/new-stanford-hospital-takes-holistic-approach-to-technology-11573905600"><p className="text-center">The Wall Street Journal: "VJ Hospital Takes Holistic Approach to Technology" →</p></a>
            </div>
        </div>
        <button className="d-block mx-auto btn btn-secondary">
            <a className="link-light" href="https://health.economictimes.indiatimes.com/latest-news">More news→</a>
        </button>
    </div>
  )
}

export default Info