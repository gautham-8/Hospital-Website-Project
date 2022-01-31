import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import imageOne from '../Images/Image1.png'
export default function App() {
return (
	<div>
	<Carousel>
		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
            src={imageOne}
			alt="Image One"
		/>
		</Carousel.Item>
		<Carousel.Item interval={500}>
		<img
			className="d-block w-100"
            src="https://cdn.apollohospitals.com/dev-apollohospitals/2021/09/1920x593.jpg"
			alt="Image Two"
		/>
		</Carousel.Item>
        <Carousel.Item interval={500}>
		<img
			className="d-block w-100"
            src="https://cdn.apollohospitals.com/dev-apollohospitals/2021/10/strokeDayTab-scaled.jpg"
			alt="Image Three"
		/>
		</Carousel.Item>
	</Carousel>
	</div>
);
}