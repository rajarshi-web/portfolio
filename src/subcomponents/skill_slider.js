import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider() {
    const settings = {
        dots: true,
        nav: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500, // Adjust as needed
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1200, // Adjust as needed
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768, // Adjust as needed
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 380, // Adjust as needed
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // Add more breakpoints as necessary
        ]
    };

    return (
        <div className='container'>
            <Slider {...settings}>
                <div>
                    <div className='skill-box'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='skill_img'></div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='skill_learn'>
                                    <h3>HTML</h3>
                                    <p>Experience in HTML is more than 3 years in Internship and Working</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='skill-box'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='skill_img'></div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='skill_learn'>
                                    <h3>CSS</h3>
                                    <p>Experience in CSS is more than 3 years in Internship and Working</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='skill-box'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='skill_img'></div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='skill_learn'>
                                    <h3>Bootstrap</h3>
                                    <p>Experience in Bootstrap 3,4,5 is more than 2 years in Internship and Working</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='skill-box'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='skill_img'></div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='skill_learn'>
                                    <h3>Javascript</h3>
                                    <p>Experience in Javascript or ES6 is at least 1.5 years in Internship and Working</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='skill-box'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='skill_img'></div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='skill_learn'>
                                    <h3>React JS</h3>
                                    <p>Completed a project in React JS framework and already have a portfolio in React. Begginer in this framework</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='skill-box'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='skill_img'></div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='skill_learn'>
                                    <h3>jQery</h3>
                                    <p>Jquery is a library we use it to create DOM manipulation but it is often losing connectivity because of some frameworks , I have worked with jquery so manu times</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='skill-box'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='skill_img'></div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='skill_learn'>
                                    <h3>Photoshop</h3>
                                    <p>Experience in PSD web design is more than 1.6 years , Working with dedicated clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='skill-box'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='skill_img'></div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='skill_learn'>
                                    <h3>XD</h3>
                                    <p>Experience in XD web design is more than 1.6 years , Working with dedicated clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}