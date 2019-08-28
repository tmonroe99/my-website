import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Box, FlexBox, Grid, Card, CardActions, CardMedia, Typography, CardContent, Container } from '@material-ui/core';
import ReactPlayer from 'react-player'
import { Component } from 'react';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    card: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
  }))


export default function Portfolio() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (

         <Box display="grid">
            <Card width="100" height="100">
                <Typography> This is a video game trailer that I have been commissioned to make for Box Cat Games. </Typography>
             </Card>
            <Card width="100" height = "100">
            <ReactPlayer url='https://www.youtube.com/watch?v=04sB-9AFprk&feature=youtu.be' playing />
            </Card>
        </Box>




    );
  }