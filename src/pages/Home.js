import React, { useState } from 'react';
import '../pages/Home.css';

import Bg1 from '../img/eg1.jpg';
import Bg2 from '../img/eg2.jpg';
import Bg3 from '../img/eg3.jpg';

import Nbtn from '../img/next.png';
import Bbtn from '../img/back.png';

const HomePage = () => {
    const images = [Bg1, Bg2, Bg3];
    const [activeImage, setActiveImage] = useState(0);

    const nextImage = () => {
        setActiveImage((prevImage) => (prevImage + 1) % images.length);
    };

    const prevImage = () => {
        setActiveImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    };

    return (
        <div className="gallery-container">
            <img src={images[activeImage]} alt={`Image ${activeImage + 1}`} className='bg' />
            <div className="button-container">
                <button onClick={prevImage}>
                    <img src={Bbtn}></img>
                </button>
                <button onClick={nextImage}>
                    <img src={Nbtn}></img>
                </button>
            </div>
        </div>
    );
}

export default HomePage;
