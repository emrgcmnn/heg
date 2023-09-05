import React, { useState } from 'react';
import '../pages/Home.css';
import SlideContent from '../comp/slide';

import Bg1 from '../img/eg1.jpg';
import Bg2 from '../img/eg2.jpg';
import Bg3 from '../img/eg3.jpg';

import Nbtn from '../img/next.png';
import Bbtn from '../img/back.png';

const HomePage = () => {
    const images = [Bg1, Bg2, Bg3];

    const slideData = [
        { title: "ABOUT ME", 
        description: "Hello I'm Emre Gocmen. You can click on the link to learn more about me and access the courses I've completed and certificates. ", 
        buttonText: "Daha Fazla" },

        { title: "PROJECTS", 
        description: "You can check and examine my projects in more detail from the link below.", 
        buttonText: "Daha Fazla" },

        { title: "CONTACT", 
        description: "You can click on the link below to send a message or reach my social media accounts.", 
        buttonText: "Daha Fazla" }
    ];

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
            <SlideContent
                title={slideData[activeImage].title}
                description={slideData[activeImage].description}
                buttonText={slideData[activeImage].buttonText}
            />
            <div className="button-container">
                <button onClick={prevImage}>
                    <img src={Bbtn} alt="Önceki" />
                </button>
                <button onClick={nextImage}>
                    <img src={Nbtn} alt="Sonraki" />
                </button>
            </div>
        </div>
    );
    
}
export default HomePage;
