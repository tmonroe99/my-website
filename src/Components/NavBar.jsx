import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Commissions from './Commissions';


const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    // align-content: center;
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        color="#ffffff"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#f55b89',
  },
}));



export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <div className={classes.demo2}>
        <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
          <StyledTab label="About Me" />
          <StyledTab label="Resume" />
          <StyledTab label="Portfolio" />
          <StyledTab label="Commissions" />
          <StyledTab label="Contact" />
        </StyledTabs>
        <Typography className={classes.padding} />
        <TabPanel value={value} index={0}>
            <AboutMe/>
      </TabPanel>
      <TabPanel value={value} index={1}>
            <Resume/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Portfolio/> 
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Commissions/> 
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Contact/> 
      </TabPanel>
      </div>
    </div>
  );
}