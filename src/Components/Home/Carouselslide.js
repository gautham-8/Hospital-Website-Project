import React from 'react'
import Carousel from 'react-elastic-carousel'
import './home.css'
import './carouselslide.css'
import Card1 from './Cards/Card1'
import Card2 from './Cards/Card2'
import Card3 from './Cards/Card3'
import Card4 from './Cards/Card4'
import Card5 from './Cards/Card5'
import Card6 from './Cards/Card6'

const breakPoints = [
    { width: 1, itemsToShow: 1},
    { width: 576, itemsToShow: 2},
    { width: 992, itemsToShow: 3},
    { width: 1200, itemsToShow: 4},
];

function Carouselslide() {
    return (
        <div className="pt-4 bg-teal">
            <p className="display-6 text-light container">Centres of Excellence</p>
            <Carousel breakPoints={breakPoints} className="">
                <Card1 />
                <Card6 />
                <Card3 />
                <Card2 />
                <Card5 />
                <Card4 />
            </Carousel>
        </div>
    )
}

export default Carouselslide