import React from 'react';

const PortfolioItem = ({ image, index }) => {
    const boxClass = index % 2 === 0 ? 'box-1' : 'box-3'; 

    return (
        <div className={boxClass}>
            <div className={`img-box b-${index+1}`}>
                <img src={image} alt={`Portfolio Image ${index+1}`} />
                <div className="btn-box">
                    <a href="#" className="btn-1">
                        <i className="fa fa-share-alt" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;
