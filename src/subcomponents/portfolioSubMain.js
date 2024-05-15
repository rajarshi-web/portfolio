import React from 'react';

const PortfolioItemMain = ({ image, index }) => {
    const boxClass = index % 2 === 0 ? 'box-1' : 'box-3'; 
    return (
        <div className={boxClass}>
        <div className={`img-box b-${index + 1}`}>
            <img src={image} className='img-fluid' alt={`Portfolio Image ${index + 1}`} />
            <div className="overlay">
                <div className="overlay-content">
                   <a href={image} download>Download</a>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default PortfolioItemMain;
