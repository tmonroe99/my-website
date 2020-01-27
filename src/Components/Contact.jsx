import { Typography, Card, Icon, Link } from '@material-ui/core';
// import { LinkedInIcon } from '@material-ui/icons';

import React from 'react';
import styling from './styling/contact.scss';


export default function Contact(){

    return (
        <div>
            <Card className="cardtest">

                <h3>Contact Information</h3>


                Email: tayloryounkins@gmail.com <br/>
                Cell: Email me<br/>
                <Link href="https://www.linkedin.com/in/taylor-y-bbb281b9/">LinkedIn</Link>

            </Card>
        </div>
    );
}
