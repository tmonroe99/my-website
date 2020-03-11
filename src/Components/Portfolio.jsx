import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Box, FlexBox, Grid, Card, CardActions, CardActionArea, CardMedia, Typography, CardContent, Container, Link } from '@material-ui/core';
import ReactPlayer from 'react-player'
import { Component } from 'react';
import styles from './styling/portfolio.scss';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),  
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    // minWidth: 275,
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
    <div padding="10px">
      <Box
        alignContent="center"
        display="flex"
        flexWrap="wrap"
        padding="10px"
        margin="auto"
        // margin="10px"
        maxWidth="940px"
        // css={{ maxWidth: "auto" }}
      >
        {/* <div className='player-wrapper'> */}
          <Box flex="auto" maxWidth="1280px" width="auto" padding="10px">
            <ReactPlayer
              className='react-player'
              url='https://www.youtube.com/watch?v=7LPQe26Knxs'
              width='100%'
              // height='100%'
            />
          </Box>
        {/* </div> */}
        <Box>
          <Card className="cardtest">
            Motion graphics music video for Lollia's cover of the Persona 5 opening. (Commission)<br />
            Program: Adobe After Effects  <br />
            June 2018
            </Card>
        </Box>
        {/* <div className='player-wrapper'> */}
          <Box width="auto" flex="auto" maxWidth="1280px" padding="10px">
            <ReactPlayer
              className='react-player'
              url='https://vimeo.com/228564766'

              width='100%'
            // height='100%'
            />
          </Box>
        {/* </div> */}
        <Box>
          <Card className="cardtest">
            OPSPARC Contest promotion encouraging students to enter the contest and make their own innovative spinoffs.<br />
            Program: Adobe After Effects <br />
            Summer 2017 <br />

          </Card>
        </Box>
        <Box flex="auto" maxWidth="1280px" padding="10px">
          <div className='player-wrapper'>
            <Card>
                <ReactPlayer
                  className='react-player'
                  url='https://vimeo.com/273628224' paused
                  width='100%'
                />
            </Card>
          </div>
        </Box>
        <Box>
          <Card className="cardtest">
            TECHFIT is a program funded by a National Science Foundation grant. This was included in my tasks as a Student Assistant.<br />
            Program: Adobe After Effects
            January - May 2018 <br />
          </Card>
        </Box>

        <Box flex="auto" maxWidth="1280px" padding="10px">
        <div className='player-wrapper'>
          <ReactPlayer url='https://www.youtube.com/watch?v=QaHe2EaeCdc' paused
            width="100%"
            // height="100%"
          />
          </div>
        </Box>
        <Box>
          <Card className="cardtest">
            Fun album highlights of Lollia's Vocaloid cover album. (Commission) <br />
            Program: Adobe After Effects <br />
            March 2019 <br />

          </Card>
        </Box>
      </Box>
      {/* </section> */}
      <h3>For more, visit my Vimeo: <Link>https://vimeo.com/tayloryounkins</Link> </h3>
    </div>


  );
}