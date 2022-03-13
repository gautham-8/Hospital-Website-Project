import React from 'react';
import Cover from './Home/Cover'
import Welcome from './Home/Welcome';
import Carouselslide from './Home/Carouselslide';
import Whyus from './Home/Whyus'
import Info from './Home/Info'
import Footer from './Footer'

function Home() {
    return <div>
        <Cover />
        <Welcome />
        <Carouselslide />
        <Whyus />
        <Info />
        <Footer />
    </div>;
}

export default Home;
