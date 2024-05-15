import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import GetInTouch from "../components/getintouch";
import PortfolioSub from "../components/PortfolioSub";
import Carousel from "../subcomponents/skill_slider";
import PortfolioDataMain from "../subcomponents/hoj";

function Portfolio() {
    return (
        <>
            <>
            <Nav/>
               <PortfolioSub/>
               <PortfolioDataMain/>
                {/* end portfolio section */}
                {/* contact section */}
                {/* <Carousel/> */}
                <GetInTouch/>
                <Footer/>
            </>

        </>
    )
}

export default Portfolio;