import React from 'react';  
import { Typography, Card } from '@material-ui/core';
import styling from './styling/commissions.scss';


export default function Commissions(){

    return (
        <div>
            <Card className="card">
                <p className={styling.text}>
                Contact me directly for details.<br/><br/>
                    Small Commissions: Open <br/>
                    - simplistic kinetic Typography<br/>
                    - concise scope<br/>
                    Large Commissions: Currently Unavailable (Taken)<br/>
                    - Trailers<br/>
                    - Heavy visual elements<br/>
                    - High production<br/>
                </p>
            </Card>
        </div>
    );
}
