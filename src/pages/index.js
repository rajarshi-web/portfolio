import React, { useEffect } from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";
import GetInTouch from "../components/getintouch";
import PortfolioSub from "../components/PortfolioSub";
import Skills from "../components/skills";
import AboutSub from "../components/AboutSub";
import AppLead from "../components/worlonprogress";
import { Modal } from "bootstrap";


function Index() {

    useEffect(() => {

        // document.querySelector('.slider_btn_prev').addEventListener('click', function (e) {
        //     e.preventDefault();
        //     prevSlide();
        // });

        // document.querySelector('.slider_btn_prev').addEventListener('click', function (e) {
        //     e.preventDefault();
        //     prevSlide();
        // });

        // document.querySelector('.slider_btn_next').addEventListener('click', function (e) {
        //     e.preventDefault();
        //     nextSlide();
        // });




    }, []);


    function prevSlide() {
        let currentSlide = document.querySelector('.carousel-item.active');
        let prevSlide = currentSlide.previousElementSibling || document.querySelector('.carousel-inner').lastElementChild;
        console.log("Current slide:", currentSlide);
        console.log("Previous slide:", prevSlide);
        currentSlide.classList.remove('active');
        prevSlide.classList.add('active');
    }

    function nextSlide() {
        let currentSlide = document.querySelector('.carousel-item.active');
        let nextSlide = currentSlide.nextElementSibling || document.querySelector('.carousel-inner').firstElementChild;
        console.log("Current slide:", currentSlide);
        console.log("Next slide:", nextSlide);
        currentSlide.classList.remove('active');
        nextSlide.classList.add('active');
    }
    return (
        <>
       
            <>
                {/* Hello world */}
                <div className="hero_area">
                    {/* header section strats */}
                    <Nav />
                    {/* end header section */}
                    {/* slider section */}
                    <section class="slider_section position-relative">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="detail-box col-lg-4 col-md-5">
                                    <div id="slider_text_carousel" class="carousel slide slider_text_carousel" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <div class="detail_content">
                                                    <div>
                                                        <h1>FRONT-END <br /> DEVELOPER</h1>
                                                        <a href="portfolio.html">Read more</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="detail_content">
                                                    <div>
                                                        <h1>WEB <br /> DESIGNER</h1>
                                                        <a href="portfolio.html">Read more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="img-box col-lg-8 col-md-7">
                                    <div id="slider_image_carousel" class="carousel slide slider_image_carousel carousel-fade" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src="assets/images/slider-img.jpg" alt="" />
                                            </div>
                                            <div class="carousel-item">
                                                <img src="assets/images/slider-img2.jpg" alt="" />
                                            </div>
                                            <div class="carousel-item">
                                                <img src="assets/images/slider-img3.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel_btn-box">
                                        <a className="slider_btn_prev" href="#" role="button" onClick={prevSlide}>
                                            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="slider_btn_next" href="#" role="button" onClick={nextSlide}>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                            <span className="sr-only">Next</span>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* end slider section */}
                </div>
                {/* about section */}
                <AboutSub />
                {/* end about section */}
                {/* portfolio section */}
                <PortfolioSub />
                {/* end portfolio section */}
                {/* team section */}
                <Skills />
                {/* end team section */}
                {/* contact section */}
                <GetInTouch />
                {/* end contact section */}
                {/* footer section */}
                <Footer />
            </>

        </>
    )
}

export default Index;
