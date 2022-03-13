import React from 'react'
import './home.css'

function Whyus() {
    return (
        <div className='bg-grey'>
            <div className="row text-center d-flex justify-content-center mx-auto container pt-4 pb-4">
                <div className="cols col-lg-6">
                    <img className="img-fluid" src="https://stanfordhealthcare.org/content/dam/SHC/nsh/Final-1117/story/new-stanford-hospital-story-why-choose.png/jcr:content/renditions/original" alt="" />
                </div>
                <div className="cols col-lg-6 d-flex align-items-center">
                        <div>
                            <p className="display-6 head-clr">Why Choose VJ Health Care?</p>
                            <p>VJ Health Care is no ordinary health system. As part of VJ Medicine and the larger VJ University family, we provide care as an academic medical center, combining clinical care, research and teaching to advance medicine. Our team of doctors and scientists harness the resources of one of the world’s leading universities to create breakthroughs in diagnosis and treatment. Together, they are working to translate scientific insights into real-world solutions that can positively impact your health.</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Whyus