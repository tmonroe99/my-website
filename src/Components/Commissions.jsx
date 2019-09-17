import React from 'react';  
import { Typography, Card } from '@material-ui/core';
import styling from './styling/commissions.scss';


export default function Commissions(){

    return (
        <div>
            <Card className="card">
            <h3>Commissions</h3>
                <p className="text">
                Contact me directly for details.<br/><br/>
                    Small Commissions: Open <br/>
                    - simplistic kinetic Typography<br/>
                    - small scope<br/>
                    - simple motion graphics <br/>
                    <br/>
                    Large Commissions: Closed <br/>
                    - Trailers<br/>
                    - Heavy visual elements<br/>
                    - High production<br/>
                    - Long timeline<br/>
                </p>
            </Card>
        </div>
    );
}
