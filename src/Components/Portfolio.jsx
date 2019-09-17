import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Box, FlexBox, Grid, Card, CardActions, CardMedia, Typography, CardContent, Container } from '@material-ui/core';
import ReactPlayer from 'react-player'
import { Component } from 'react';
import styles from './styling/portfolio.scss';


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

        <section class="grid-1">
          <div class="item-1">
            <Card>
              <Paper>
            <ReactPlayer url='https://www.youtube.com/watch?v=49sLgfI6Xzk&feature=youtu.be' paused />
            </Paper>
            </Card>
          </div>
          <div class="item-2">
            <Card className="cardtest">
            This is an album crossfade I was commissioned to make for Lollia's Vocaloid cover album. <br/>
             March 2019 <br/>
            Program: Adobe After Effects 
            </Card>
          </div>

          <div class="item-4">
          <Card>
              <Paper>
            <ReactPlayer url='https://vimeo.com/273628224' paused />
            </Paper>
            </Card>
          </div>
          <div class="item-3">
          <Card className="cardtest">
            Part of my role as a Student Assistant for Professor Harriger.<br/>
             January - May 2018 <br/>
            Program: Adobe After Effects 
            </Card>
          </div>
          
          <div class="item-5">
          <Card>
              <Paper>
            <ReactPlayer url='https://vimeo.com/228564766' paused />
            </Paper>
            </Card>
          </div>
          <div class="item-6">
          <Card className="cardtest">
            OPSPARC Contest promotion explaining what NASA spinoffs are, targeted to K-12 students.<br/>
            Summer 2017 <br/>
            Program: Adobe After Effects 
            </Card>
          </div>
      </section>


      </div>

    );
  }