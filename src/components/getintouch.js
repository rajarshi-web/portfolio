import React from "react";

function GetInTouch() {
    return (
        <section className="contact_section ">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 map_container">
                        <div className="map">
                            <img src="assets/images/slider-img2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-4 detail-box detail_box_common">
                        <div>
                            <div className="heading_container">
                                <h2>Get In Touch</h2>
                            </div>
                            <div className="info_contact">
                                <div className="contact_link_box">
                                    <a href="">
                                        <i className="fa fa-map-marker" aria-hidden="true" />
                                        <span>Kolkata</span>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-phone" aria-hidden="true" />
                                        <span>Call +91 7980088958</span>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        <span>rajarshimandal19@gmail.com</span>
                                    </a>
                                </div>
                                <div className="info_social">
                                    <a href="https://github.com/rajarshi-web">
                                        <i className="fa fa-github" aria-hidden="true" />
                                    </a>
                                    <a href="https://www.behance.net/rajarshimandal1">
                                        <i className="fa fa-behance" aria-hidden="true" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/rajarshi-mandal-400a45183/">
                                        <i className="fa fa-linkedin" aria-hidden="true" />
                                    </a>
                                </div>
                                <div className="subscribe_section">
                                    <div className="heading_container">
                                        <h2>Subscribe</h2>
                                    </div>
                                    <form>
                                        <input type="email" className="subscribe_input" placeholder="Your Email" />
                                        <button type="submit" className="subscribe_button">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetInTouch