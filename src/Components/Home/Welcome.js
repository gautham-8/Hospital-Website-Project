import React from 'react'
import './home.css';

function Welcome() {
  return (
    <div className="">
        <div className="row text-center d-flex justify-content-center mx-auto container mb-4">
            <div className="cols col-lg-6">
                <p className="display-6 head-clr">Welcome to VJ Hospitals</p>
                <p>A reimagined space for health and healing, this extraordinary new facility doubles our capacity for patient care and modernizes our ability to treat and cure. It blends the most advanced medical technologies with a human-centered approach to patient care and brings us closer to achieving our vision—to predict, prevent and cure more precisely.
                For decades, VJ Medicine has driven the biomedical research that changes how health care is delivered here and around the world. With the opening of the groundbreaking new VJ Hospital, VJ is once again pushing the limits of modern medicine. This new hospital vastly increases the power and speed with which we can translate our discoveries to the benefit of all people.
                The opening of the VJ Hospital continues our proud legacy of caring for our local community and for patients from around the country and across the globe.</p>
            </div>
            <div className="cols col-lg-6">
                <img className="img-fluid" src="https://stanfordhealthcare.org/discover/new-stanford-hospital-story/_jcr_content/heroparsys/general_container_1932166321/parsyscontainer/columns/parsyscenter/dynamic_container/content/imagewithcaption/image.img.full.high.png/1573870909108.png" alt="" />
            </div>
        </div>
        <div className="mx-auto display-6 text-center bg-grey head-clr pt-4 pb-4">
            <div className="container">
            “This hospital will be a place for firsts. New discoveries will be made here. New procedures will be performed. And through this state-of-the-art facility, we will revolutionize the way patient care is delivered at Vignana Jyothi.” <br/> <p className="d-flex justify-content-end">- CEO, VJ Hospitals</p>
            </div>
        </div>
    </div>
  )
}

export default Welcome