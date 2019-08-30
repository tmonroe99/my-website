import { Typography, Card } from '@material-ui/core';
import React from 'react';
import styling from './styling/contact.scss';

export default function Contact(){

    return (
        <div>

        <Card className="card">
            Email: tayloryounkins@gmail.com <br/>
            Cell: (1)410-456-1552
        </Card>
        </div>
    );
}
