import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Styling from './styling/aboutme.scss';

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
            <h3>who am i?</h3>
            <Container className="text">
            I've always been both a creative and technical person. 
            I've been programming, doing graphic design, and editing videos since middle school.
             Doing web development was something I always thought about doing, but I only recently 
             gained experience which really had me draw another connection between my technical and creative skills. I wanted a place to 
             showcase these technical and creative skills that I enjoy cultivating. I'm a very visual oriented person and I'm really excited to also
             combined my After Effects, Photoshop, and Illustrator skills to create even more enticing design!
            </Container>

        </div>
    
    );
}

