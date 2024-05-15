import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioData = () => {
    
    const portfolioData = [
        { image: "assets/images/p1.png" },
        { image: "assets/images/p2.png" },
        { image: "assets/images/p3.png" },
        // { image: "assets/images/p4.jpg" },
        // { image: "assets/images/p5.jpg" }
    ];

    return (
        <section className="portfolio_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>Portfolio</h2>
                </div>
                <div className="portfolio_container">
                    {portfolioData.map((item, index) => (
                        <PortfolioItem key={index} image={item.image} index={index} />
                    ))}
                </div>
                {/* <div>
                    <a href="#" className="read_btn">See More</a>
                </div> */}
            </div>
        </section>
        
    );
};

export default PortfolioData;
