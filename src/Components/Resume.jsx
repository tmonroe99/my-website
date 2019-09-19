import React from'react';
import { Box, FlexBox, Grid, Card, CardActions, CardMedia, Typography, CardContent, Container } from '@material-ui/core';
import Purdue from './static/Purdue.png';
import AmEx from './static/amex.png';
import styling from './styling/resume.css';
import iDTech from './static/idtechlogo.jpg';
import nasa from './static/nasalogo.png';

export default function Resume () {
    return (
        <Container>
            <h3>Education</h3>
            <Card>
            <br/>
            School: Purdue University  <br/>
                    Year: Junior(3rd Year) - Graduating Spring 2021<br/>
                    Major: Cybersecurity <br/>
                    Minors: Computer Science, Communication <br/>
                    GPA: 3.83/4.00 <br/>
                    <img src={Purdue} width="50"></img>
            </Card>
            <h3>Work Experience</h3>
            <Card>
                <span>
                    <br/>
            American Express - Sunrise, FL <br/>
                    Software Engineering Intern <br/>
                    June 2019 - August 2019 (Summer)<br/>
                    <p className="bulletpoints">
                    - Created developer tools with React to speed up the development process, decrease time spent debugging, and allow <br/>
                    production errors to be found more easily using a Scaled Agile Framework environment.<br/>
                    - Created a role-based access table to allow developers and product owners to change access privileges of user groups<br/>
                    - Version control with Git and Bitbucket, unit tested with Jest and Enzyme
                    </p>
                    <img src={AmEx} width="50"></img>
                    </span>
            </Card>
            <h3> </h3>
            <Card>
                <span>
                    <br/>
                    iDTech Camps - Washington, DC <br/>
                    Instructor <br/>
                    June 2018 - August 2018 (Summer)<br/>
                    <p className="bulletpoints">
                    - Practiced simplifying advanced technical skills to different non-technical audiences in order to foster communication or understanding<br/>
                    - Taught weeklong courses to students the fundamentals of programming, 3D modeling, and video  production in a classroom setting<br/>

                    </p>
                    <img src={iDTech} width="50"></img>
                    </span>
            </Card>
            <h3> </h3>
            <Card>
                <span>
                    <br/>
                    Purdue University - West Lafayette, IN<br/>
                    Student Assistant <br/>
                    January 2018 - May 2018<br/>
                    <p className="bulletpoints">
                    - Assisted with organizing information systems and databases to keep track of potential candidates for TECHFIT<br/>
                    (Teaching Engineering Concepts to Harness Future Innovators and Technologists) program <br/>
                    - Made a catchy video to help TECHFIT to renew NSF Foundation grant and gain funding and recognition from other members in the education field <br/>
                    <br/> See my portfolio for my work!<br/>
                    </p>
                    <img src={Purdue} width="50"></img>
                    </span>
            </Card>
            <h3> </h3>
            <Card>
                <span>
                    <br/>
                    NASA Goddard Space Flight Center - Greenbelt, MD<br/>
                    Intern <br/>
                    June - August 2016, 2017<br/>
                    <p className="bulletpoints">
                    - Created media to promote innovation and flow of NASA space technology to everyday life, known as spinoffs, initiated through the Technology Transfer Office<br/>
                    - Created promotional and informational videos about the NASA Goddard Optimus Prime Spinoff Promotional and Research Challenge(OPSPARC) to encourage students to enter in the contest and create their own innovative spinoffs<br/>
                    <br/>See my portfolio for some of my work! <br/>


                    </p>
                    <img src={nasa} width="50"></img>
                    </span>
            </Card>
            <h3>Student Leadership</h3>
            <h4>AKA, where I devote my heart and soul to when I'm offline.  </h4>
            <Container class="container">
                        <Card marginRight='110'>
                            <span>
                                <br/>
                                Vice President, Women in Technology	<br/>
                                Purdue University<br/>
                                November 2018 - Present<br/>
                                <p className="bulletpoints">
                                - Leader of WiTty Sisters, a mentorship program matching underclassmen and upperclassmen by major for academic, professional, and other guiding advice to increase female retention in the Polytechnic Institute
                                <br/>
                                - Lead and organize Women in Technology events to promote retention, recruitment, and gender diversity in the Polytechnic Institute, including professional development, social networking, and volunteer events
                                <br/>
                                </p>
                                </span>
                        </Card>
                <h3> </h3>
                <Card>
                    <span>
                        <br/>
                        Cybersecurity Representative<br/>
                        Purdue University<br/>
                        June 2019 - Present<br/>
                        <p className="bulletpoints">
                        - Representative of the Cybersecurity students in Purdue’s Computer Information Technology department, promoting student body engagement, professional and academic development, and retention
                        test
                        <br/>
                        </p>
                        <img src={Purdue} width="50"></img>
                        </span>
                </Card>
                <h3> </h3>
                <Card>
                    <span>
                        <br/>
                        Student Ambassador<br/>
                        Purdue Polytechnic Institute <br/>
                        February 2018 - Present<br/>
                        <p className="bulletpoints">
                        - Representative of the Purdue Polytechnic Institute to prospective students regarding enrollment and retention initiatives, while promoting organizational engagement within current student body
                        <br/>
                        </p>
                        </span>
                </Card>
            </Container>
        </Container>
    );
}


