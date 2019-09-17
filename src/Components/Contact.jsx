import { Typography, Card } from '@material-ui/core';
import React from 'react';
import styling from './styling/contact.scss';

export default function Contact(){

    console.log(styling);


    return (
        <div>
            <Card className="card">

                <h3>Contact Information</h3>

                Email: tayloryounkins@gmail.com <br/>
                Cell: (1) 410-456-1552<br/>

            </Card>
        </div>
    );
}
