import React from 'react';
import { Rating } from '@material-ui/lab';
import { Typography, Card, Paper, Grid, Box } from '@material-ui/core';
import skills from './styling/skillsflex.scss';


export default function Skills(){

    return (
        <div>
        <Box
        alignContent="center"
        display="flex"
        flexWrap="wrap"
        p={1}
        m={2}
        // bgcolor="background.paper"
        css={{ maxWidth: "auto" }}
      >
        <Box p={1} width="auto" flex="auto" minWidth="200px">
            <Paper >
                <Typography> Adobe After Effects</Typography> 
                <Rating value={5} readOnly ></Rating>
            </Paper>
        </Box>
        <Box p={1} width="auto" flex="auto" minWidth="200px">
            <Paper>
                <Typography> Java</Typography> 
                <Rating value={4} readOnly></Rating>
            </Paper>
        </Box>
        <Box p={1} width="auto" flex="auto" minWidth="200px">
            <Paper>
                <Typography> Javascript</Typography> 
                <Rating value={3} readOnly></Rating>
            </Paper>
        </Box>
        <Box p={1} width="auto" flex="auto" minWidth="200px">
            <Paper>
                <Typography> Photoshop</Typography> 
                <Rating value={4} readOnly></Rating>
            </Paper>
        </Box>
        <Box p={1} width="flex" flex="auto" minWidth="200px">
            <Paper>
                <Typography> React.js</Typography> 
                <Rating value={2} readOnly></Rating>
            </Paper>
        </Box>
        <Box p={1} width="flex" flex="auto" minWidth="200px">
            <Paper>
                <Typography> SQL</Typography> 
                <Rating value={3} readOnly></Rating>
            </Paper>
        </Box>
        <Box p={1} width="flex" flex="auto" minWidth="200px">
            <Paper>
                <Typography> HTML</Typography> 
                <Rating value={2} readOnly></Rating>
            </Paper>
        </Box>
        <Box p={1} width="flex" flex="auto" minWidth="200px">
            <Paper>
                <Typography> C</Typography> 
                <Rating value={2} readOnly></Rating>
            </Paper>
        </Box>
        <Box p={1} width="flex" flex="auto" minWidth="200px">
            <Paper>
                <Typography>C#</Typography> 
                <Rating value={2} readOnly></Rating>
            </Paper>
        </Box>
      </Box>
    </div>
    );
}
