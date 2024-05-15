import React from 'react';
import PortfolioItemMain from './portfolioSubMain';


const PortfolioDataMain = () => {
    
    const portfolioData = [
        
        
        
        
        { image: "assets/images/p11.jpg" },
        { image: "assets/images/p15.jpg" },
        { image: "assets/images/p14.jpg" },
        { image: "assets/images/p12.jpg" },
        { image: "assets/images/p13.jpg" },
    ];

    return (
        <section className="portfolio_section layout_padding">
        <div className="container"> {/* Use container-fluid for full width */}
            <div className="row">
                {portfolioData.map((item, index) => (
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12" key={index}> {/* Adjust column width as per your requirement */}
                        <PortfolioItemMain image={item.image} index={index} />
                    </div>
                ))}
            </div>
        </div>
    </section>
        
    );
};

export default PortfolioDataMain;
