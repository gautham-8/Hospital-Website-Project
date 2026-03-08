import React from 'react';
import Cover from './Home/Cover'
import Welcome from './Home/Welcome';
import CarouselSlide from './Home/CarouselSlide';
import WhyUs from './Home/WhyUs'
import Info from './Home/Info'
import Footer from './Footer'

function Home() {
    return <div>
        <Cover />
        <Welcome />
        <CarouselSlide />
        <WhyUs />
        <Info />
        <Footer />
    </div>;
}

export default Home;
