
import React from 'react';
import '../comp/slide.css'

const SlideContent = ({ title, description, buttonText }) => {
    return (
        <div className="slide-content">
            <div className="text-container">
                <h1><b>{title}</b></h1>
                <h2>{description}</h2>
                <a><b>{buttonText}</b></a>
            </div>
        </div>
    );
}

export default SlideContent;
