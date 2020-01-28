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
                Taylor • Purdue University • Columbia MD, USA<br/>
                <br/>
                This is my website, where I aim to show off the creative and technical side of myself, and provide depth and agency to a variety of my projects. 
                <br/> <br/>
                My hobbies include: <br/>
                 making motion graphics and a variety of styled animated videos • programming • ice skating 
                 • hanging out with friends • playing video games • volunteering • listening to music 
                <br/>
              </div>

              </Card>
            </Container>
        </div>
        
    
    );
}

