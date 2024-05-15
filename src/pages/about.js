import React from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";
import GetInTouch from "../components/getintouch";
import AboutSub from "../components/AboutSub";

function About() {
    return (
        <>
        <Nav/>
            <AboutSub/>
            <GetInTouch/>
        <Footer/>
        </>
    )
}

export default About;