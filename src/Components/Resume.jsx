import React from'react';
import { Box, FlexBox, Grid, Divider, Card, CardActions, CardMedia, Image, Typography, CardContent, Container, Link } from '@material-ui/core';
import Purdue from './static/Purdue.png';
import AmEx from './static/amextransparent.png';
import styling from './styling/resume.css';
import iDTech from './static/idtechlogo.jpg';
import nasa from './static/nasalogo.png';
import Skills from './Skills.jsx';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

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

            <Skills/>

                           <h3/>
            <h3>Work Experience</h3>

            <Timeline lineColor={'#ddd'}>   

            <TimelineItem
                
                // dateComponent={<img src={AmEx} width="150" display="inline"></img>}
                
                key="001"
                dateText="June 2019 - August 2019"
                color="F5C75B"
                dateInnerStyle={{ background: '#006fcf'}} //date color
                style={{ color: '#006fcf'}} //dot color
                bodyContainerStyle={{
                    background: '#fff',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                  }}

                 
               >
                <h3>Software Engineering Intern, American Express</h3>
                <h4>Sunrise, FL</h4>
                {/* <img src={AmEx} width="50"></img> */}
                ❖ Created security and developer web tools for AmEx software engineers, speeding up the development process and allowing production errors to be found more easily <br/>
                ❖ Developed a role-based access table allowing developers to update access rights of over 1,000 users in SSO groups for an internal web portal handling sensitive customer information <br/>
                ❖ Collaborated with backend intern team to determine API contracts<br/>
                ❖ Worked with React.js, JavaScript, API response mocking, Git, Jest, Enzyme, HTML, CSS<br/>
            
                {/* <img src={AmEx} width="150" display="block"></img> */}

            </TimelineItem>
            <TimelineItem
                key="002"
                dateText="June 2018 - August 2018"
                color="F5C75B"
                dateInnerStyle={{ background: '#94d500'}} //date color
                style={{ color: '#94d500'}} //dot color
                bodyContainerStyle={{
                    background: '#fff',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                  }}
               >
                <h3>Instructor, iDTech Camps</h3>
                <h4>Washington, DC</h4>
                ❖ Taught advanced technical skills such as the fundamentals of programming, 3D modeling, and video production to non-technical audiences for a total of 80 students over the course of 8 weeks <br/>
                {/* <img src={iDTech} width="150"></img> */}
            </TimelineItem>
            <TimelineItem
                key="003"
                dateText="January 2018 - May 2018"
                color="F5C75B"
                dateInnerStyle={{ background: '#DFB300'}} //date color
                style={{ color: '#DFB300'}} //dot color
                bodyContainerStyle={{
                    background: '#fff',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                  }}
               >
                <h3>Student Assistant, Purdue University</h3>
                <h4>West Lafayette, IN</h4>
                ❖ Assisted with organizing information systems and databases to keep track of potential candidates for TECHFIT
                (Teaching Engineering Concepts to Harness Future Innovators and Technologists) program <br/>
                ❖ Made a catchy video to help TECHFIT to renew NSF Foundation grant and gain funding and recognition from other members in the education field
            
            </TimelineItem>
            <TimelineItem
                key="004"
                dateText="June 2016 - August 2016, 2017"
                color="F5C75B"
                dateInnerStyle={{ background: '#fc3d21'}} //date color
                style={{ color: '#fc3d21'}} //dot color
                bodyContainerStyle={{
                    background: '#fff',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                  }}
               >
                   
                <h3>Intern, NASA Goddard Space Flight Center</h3>
                <h4>Greenbelt, MD</h4>
                ❖ Created media to promote innovation and flow of NASA space technology to everyday life, known as spinoffs, initiated through the Technology Transfer Office<br/>
                ❖ Created promotional and informational videos about the NASA Goddard Optimus Prime Spinoff Promotional and Research Challenge(OPSPARC) to encourage students to enter in the contest and create their own innovative spinoffs<br/>
                <br/>See my portfolio for my work!<br/>
            </TimelineItem>

            </Timeline>


            
    
            <h3>Student Leadership</h3>
            <h4>AKA, where I devote my heart and soul to when I'm offline.  </h4>
            <Container class="container">
                        <Card className="cardpadding">
                            <span>
                                <br/>
                                Vice President, Women in Technology	<br/>
                                Purdue University<br/>
                                November 2018 - Present<br/>
                                <p className="bulletpoints">
                                - Leader of WiTty Sisters, a mentorship program matching underclassmen and upperclassmen by major for academic, professional, and other guiding advice to increase female retention in the Polytechnic Institute
                                <br/>
                                - Lead and organize Women in Technology events to promote retention, recruitment, and gender diversity in the Polytechnic Institute, including professional development, social networking, and volunteer events <br/>
                                <Link>http://purduewit.weebly.com/executive-board.html</Link>
                                <br/>
                                </p>
                                </span>
                        </Card>
                <h3> </h3>
                <Card className="cardpadding">
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
                <Card className="cardpadding">
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


