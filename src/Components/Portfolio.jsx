import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Box, FlexBox, Grid, Card, CardActions, CardMedia, Typography, CardContent, Container } from '@material-ui/core';
import ReactPlayer from 'react-player'
import { Component } from 'react';
import styles from './portfolio.scss';


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
    <div>
         <Box display="in-line">
            {/* <Card width="100" height="100"> */}
                {/* <Typography> This is a video game trailer that I have been commissioned to make for Box Cat Games. </Typography> */}
             {/* </Card> */}
            {/* <Card width="100" height = "100">
            <ReactPlayer url='https://www.youtube.com/watch?v=04sB-9AFprk&feature=youtu.be' playing />
             This is a video game trailer that I have been commissioned to make for Box Cat Games. 
            </Card> */}
        </Box>

        <section class="grid-1">
          <div class="item-1">
            <Card>
              <Paper>
            <ReactPlayer url='https://www.youtube.com/watch?v=49sLgfI6Xzk&feature=youtu.be' playing />
            </Paper>
            </Card>
          </div>
          <div class="item-2">
            <Card className="cardtest">
              {/* <Paper> */}
            This is an album crossfade I was commissioned to make for Lollia's Vocaloid cover album. 
            <br/> March 2019 
                                <br/>Program: Adobe After Effects 
              {/* </Paper> */}
            </Card>
          </div>
          <div class="item-3">3</div>
          <div class="item-4">4</div>
          <div class="item-5">5</div>
          <div class="item-6">6</div>
      </section>


      </div>

    );
  }