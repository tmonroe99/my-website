import React from 'react';  
import { Typography, Card, Paper, Box } from '@material-ui/core';
import styling from './styling/commissions.scss';


export default function Commissions(){

    return (
        <Box
        alignContent="center"
        display="flex"
        flexWrap="wrap"
        p={1}
        m="auto"
        // bgcolor="background.paper"
        // css={{ maxWidth: "auto" }}
      >
          <div alignContent="center" margin="auto" alignItems="center">
                <Box p={1} >
            <Paper className="center">
            <h3>Commissions</h3>
                <p className="text">
                Contact me directly for details.<br/><br/>
                    Small Commissions: <b>Open</b> <br/>
                    ❖ simplistic kinetic typography<br/>
                    ❖ small scope<br/>
                    ❖ simple motion graphics <br/>
                    <br/>
                    Large Commissions: <b>Closed</b> <br/>
                    Current Project: Lucid Heart Video Game Trailer<br/>
                    ❖ Trailers<br/>
                    ❖ Heavy visual elements<br/>
                    ❖ High production<br/>
                    ❖ Long timeline<br/>
                </p>
            </Paper>
            </Box>
            </div>
        </Box>
    );
}
