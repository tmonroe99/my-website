import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Card, CardActions, CardMedia, Typography, CardContent } from '@material-ui/core';


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
  }));


export default function Portfolio() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            {/* <Paper className={classes.paper}>xs=6</Paper> */}
            <Card  className={classes.card}>
                <Typography> heyyy </Typography>
             </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
                <CardMedia
                className={classes.media}
                video="https://www.youtube.com/watch?v=YyCkSVVY0qo&feature=youtu.be"
                title="Lucid Heart"
                />

            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }