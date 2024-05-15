import React from "react";

function Skills() {
    const skills = [
        "HTML",
        "CSS",
        "Jquery",
        "Figma",
        "Javascript",
        "React JS(1Year)",
        "SQL(1Year)",
        "CMS",
        "Photoshop",
        "Illustrator"
    ];

    const companies = [
        { name: "Digital APtech Private Limited", image: "assets/images/team1.jpg", date:"July 2023-2024", posit: "Front End Developer"},
        { name: "Arobit Business Solution", image: "assets/images/team2.jpg", date:"Sept 2022-Mar 2023", posit: "Web Designer"},
        { name: "Wordsys Information Technology", image: "assets/images/team3.jpg", date:"Feb 2022-Aug 2022", posit:"Jr. Web Designer" }
    ];
    return(
        // <section className="team_section">
        //             <div className="container-fluid">
        //                 <div className="row">
        //                     <div className="col-lg-4 col-md-5 detail-box detail_box_common text_center">
        //                         <div className="heading_container heading_center">
        //                             <h2>Companies I Worked For</h2>
        //                         </div>
        //                         <p className="skills"></p>
        //                         <ul>
        //                             <li>HTML</li>
        //                             <li>CSS</li>
        //                             <li>Jquery</li>
        //                             <li>Figma</li>
        //                             <li>Javascript</li>
        //                             <li>React JS(1Year)</li>
        //                             <li>SQL(1Year)</li>
        //                             <li>CMS</li>
        //                             <li>Photoshop</li>
        //                             <li> Illustrator</li>
        //                         </ul>
        //                         <p />
        //                     </div>
        //                     <div className="col-lg-8 col-md-7 team_container text_center">
        //                         <div className="row">
        //                             <div className="col-sm-6 mx-auto">
        //                                 <div className="team_box">
        //                                     <div className="img-box">
        //                                         <img src="assets/images/team1.jpg" alt="" />
        //                                     </div>
        //                                     <div className="detail-box ">
        //                                         <h5>Digital APtech Private Limited</h5>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-sm-6 mx-auto">
        //                                 <div className="team_box">
        //                                     <div className="img-box">
        //                                         <img src="assets/images/team2.jpg" alt="" />
        //                                     </div>
        //                                     <div className="detail-box">
        //                                         <h5>Arobit Business Solution</h5>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-sm-6 mx-auto">
        //                                 <div className="team_box">
        //                                     <div className="img-box">
        //                                         <img src="assets/images/team3.jpg" alt="" />
        //                                     </div>
        //                                     <div className="detail-box">
        //                                         <h5>Wordsys Information Technology</h5>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </section>
        <section className="team_section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4 col-md-5 detail-box detail_box_common text_center">
                    <div className="heading_container heading_center">
                        <h2>Companies I Worked For and My Skills</h2>
                    </div>
                    <ul>
                        
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-lg-8 col-md-7 team_container text_center">
                    <div className="row">
                        {companies.map((company, index) => (
                            <div key={index} className="col-sm-6 mx-auto">
                                <div className="team_box">
                                    <div className="img-box">
                                        <img src={company.image} alt={company.name} />
                                    </div>
                                    <div className="detail-box ">
                                        <h5>{company.name}</h5>
                                        <h5>{company.date}</h5>
                                        <h5>{company.posit}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Skills;