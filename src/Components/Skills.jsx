import React from 'react';
import { Rating } from '@material-ui/lab';
import { Typography, Card, Paper, Grid } from '@material-ui/core';
import skills from './styling/skills.scss';


export default function Skills(){

    return (
        <div>
            <h3>Skills</h3>
            <div className="center">
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Paper>
                            <Typography> Adobe After Effects</Typography> 
                            <Rating value={5} readOnly></Rating>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper>
                            <Typography> Java</Typography> 
                            <Rating value={4} readOnly></Rating>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper>
                            <Typography> Javascript</Typography> 
                            <Rating value={3} readOnly></Rating>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper>
                            <Typography> Photoshop</Typography> 
                            <Rating value={4} readOnly></Rating>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper>
                            <Typography> React.js</Typography> 
                            <Rating value={2} readOnly></Rating>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper>
                            <Typography> SQL</Typography> 
                            <Rating value={3} readOnly></Rating>
                        </Paper>
                    </Grid>

                    <Grid item xs={3}>
                        <Paper>
                            <Typography> HTML</Typography> 
                            <Rating value={2} readOnly></Rating>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper>
                            <Typography> C#</Typography> 
                            <Rating value={2} readOnly></Rating>
                        </Paper>
                    </Grid>
   
                
                </Grid>
            </div>
        </div>
    );
}
