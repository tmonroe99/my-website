import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Grid, Container, Card } from '@material-ui/core';
import styling from './styling/aboutme.scss';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function AboutMe () {
    const classes = useStyles();
    return (
        <div>

            <Container>
              <Card className="card">
              <h3>who am i?</h3>
              <div>
                Taylor • Columbia MD, USA • Purdue<br/>
                <br/>
                This is my website, where I am to culminate the creative and technical side of myself, and show off my multifaceted interests. 
                <br/> <br/>
                My hobbies include: <br/>
                 making motion graphics videos • programming • ice skating • hanging out with friends • playing video games • volunteering • listening to music
                <br/>
              </div>

              </Card>
            </Container>
        </div>
        
    
    );
}

