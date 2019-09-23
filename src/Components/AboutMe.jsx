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
                I've always been both a creative and technical person. 
                I've been programming, doing graphic design, and making videos since middle school.
                I'm excited that this website gets to show off my creative skills, technical skills, and give you
                more insight to me as a person. My visual style is vibrant and full of energy just like my personality. 
              </div>

              </Card>
            </Container>
        </div>
    
    );
}

