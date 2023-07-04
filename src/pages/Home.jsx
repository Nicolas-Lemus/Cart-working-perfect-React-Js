import React from 'react'
import Headers from '../components/Headers/Headers'
import ControlledCarousel from '../components/Carousels/ControlledCarousel';
import Welcome from '../components/Welcome/Welcome';

const Home = () => {
    return (
        <div>
            <Headers HeadersH1="Tienda Fashion"/>
            <ControlledCarousel/>
            <Welcome/>
        </div>
    )
};

export default Home