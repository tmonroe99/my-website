import React from'react';
import { Box, FlexBox, Grid, Card, CardActions, CardMedia, Typography, CardContent, Container } from '@material-ui/core';
import Purdue from './static/Purdue.png';
import AmEx from './static/amex.png';
import styling from './styling/resume.scss';
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
                    Minor(s): Computer Science, Communication <br/>
                    GPA: 3.83 <br/>
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
                    - Taught weeklong courses to students the fundamentals of programming, 3D modeling, and video  production in a classroom setting

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
                    (Teaching Engineering Concepts to Harness Future Innovators and Technologists) program

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
                   - Created promotional and informational videos about the NASA Goddard Optimus Prime Spinoff Promotional and Research Challenge(OPSPARC) to emphasize the Technology Transfer office<br/>
                   - Collaborated and organized meetings with mentor to brainstorm ideas, then separated into groups to storyboard, script, and edit the videos<br/>
                   - Created a video about GSFC’s contributions to SmallSats(Small Satellites) for the Strategic Partnership Office’s convention booth for the Small Satellites Conference in Logan, Utah


                    </p>
                    <img src={nasa} width="50"></img>
                    </span>
            </Card>
        </Container>
    );
}


