import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';

function Nav() {

    useEffect(() => {
        function openNav() {
            $("#myNav").addClass("menu_width");
            $(".menu_btn-style").fadeIn();
        }

        function closeNav() {
            $("#myNav").removeClass("menu_width");
            $(".menu_btn-style").fadeOut();
        }

        
        $('#openNavButton').on('click', openNav);
        $('#closeNavButton').on('click', closeNav);

        
        return () => {
            $('#openNavButton').off('click', openNav);
            $('#closeNavButton').off('click', closeNav);
        }
    }, []);

    return (
        <header className="header_section">
            <nav className="navbar navbar-expand-lg custom_nav-container">
                <div className="custom_menu-btn">
                    <button id="openNavButton">
                        <span className="s-1"> </span>
                        <span className="s-2"> </span>
                        <span className="s-3"> </span>
                    </button>
                </div>
                <div id="myNav" className="overlay">
                    <div className="menu_btn-style ">
                        <button id="closeNavButton">
                            <span className="s-1"> </span>
                            <span className="s-2"> </span>
                            <span className="s-3"> </span>
                        </button>
                    </div>
                    <div className="overlay-content">
                        <Link to="/" className="active">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/portfolio">Portfolio</Link>
                       
                    </div>
                </div>
                <Link className="navbar-brand" to="/">
                    <span>RAJARSHI</span>
                </Link>
                <a href="tel:+917980088958" className="call_btn">
                    Call Us Now
                </a>
            </nav>
        </header>
    )
}

export default Nav;
