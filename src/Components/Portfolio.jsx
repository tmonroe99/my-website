import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Box, FlexBox, Grid, Card, CardActions, CardMedia, Typography, CardContent, Container, Link } from '@material-ui/core';
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
            <ReactPlayer url='https://vimeo.com/228564766' paused />
            </Paper>
            </Card>
          </div>
          <div class="item-2">
          <Card className="cardtest">
            OPSPARC Contest promotion explaining what NASA spinoffs are, targeted to K-12 students.<br/>
            Summer 2017 <br/>
            Program: Adobe After Effects 
            </Card>
          </div>

          <div class="item-1">
          <Card>
              <Paper>
            <ReactPlayer url='https://vimeo.com/273628224' paused />
            </Paper>
            </Card>
          </div>
          <div class="item-2">
          <Card className="cardtest">
            Part of my role as a Student Assistant for Professor Harriger.<br/>
             January - May 2018 <br/>
            Program: Adobe After Effects 
            </Card>
          </div>


          <div class="item-1">
            <Card>
              <Paper>
            <ReactPlayer url='https://www.youtube.com/watch?v=7LPQe26Knxs' paused />
            </Paper>
            </Card>
          </div>
          <div class="item-2">
            <Card className="cardtest">
            Motion graphics music video for Lollia's cover of the Persona 5 opening. <br/>
            Program: Adobe After Effects  <br/>
            2018 
            </Card>
          </div>

          <div class="item-1">
              <Card>
                <Paper>
              <ReactPlayer url='https://www.youtube.com/watch?v=04sB-9AFprk&feature=youtu.be' paused />
              </Paper>
              </Card>
            </div>
            <div class="item-2">
              <Card className="cardtest">
              Trailer for Lucid Heart preview, a fantasy visual novel. Currently a long term work in progress. <br/>
              Program: Adobe After Effects  <br/>
              ETA: end of 2019 <br/>
              </Card>
            </div>
          
          <div class="item-1">
            <Card>
              <Paper>
            <ReactPlayer url='https://www.youtube.com/watch?v=QaHe2EaeCdc' paused />
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



          

      </section>
      <h3>For more, visit my Vimeo: <Link>https://vimeo.com/tayloryounkins</Link> </h3>
      </div>
      

    );
  }