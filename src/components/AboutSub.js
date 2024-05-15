import React from "react";

function AboutSub() {
    return(
        <section class="about_section ">
                <div class="container-fluid">
                    <div class="row">
                        <div class="img-box col-lg-8 col-md-7">
                            <img src="assets/images/about-img.jpg" alt="" />
                        </div>
                        <div class="detail-box detail_box_common col-lg-4 col-md-5 text_center">
                            <div class="heading_container heading_center">
                                <h2>
                                    About Myself
                                </h2>
                            </div>
                            <p>
                                Motivated Front End Developer with 2.3 years of experience in web designing. Proficient in HTML,
                                CSS, and JavaScript with expertise in Bootstrap and beginner in React JS.
                            </p>
                            <p>
                                B.Tech Passout 2018 batch from Hooghly Engineering and Technoogy College
                            </p>
                            <p>
                                My Hobby is Photography
                            </p>
                            <a href="">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default AboutSub