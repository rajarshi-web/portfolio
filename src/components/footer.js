import React from "react";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer className="footer_section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6">
                        <p>
                            © <span id="displayYear" /> All Rights Reserved. Design by
                            <a href="https://html.design/"> RAJARSHI</a><span className="text-warning"> Work Still on Progress Not Completed Yet</span>
                        </p>
                    </div>
                    <div className="col-xl-6">
                        <div className="link_box">
                        <Link to="/" className="active">Home</Link>
                        {/* <a className="active" href="index.html">
                            Home
                        </a> */}
                        <Link to="/about">About</Link>
                        {/* <a className="" href="about.html">
                            About
                        </a> */}
                        <Link to="/portfolio">Portfolio</Link>
                        {/* <a className="" href="portfolio.html">
                            Portfolio
                        </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;