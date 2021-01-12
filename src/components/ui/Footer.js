import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import footerAdornment from '../../assets/Footer Adornment.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative"
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em"
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em"
    }
  },
  mainContainer: {
    position: "absolute"
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none"
  },
  gridItem: {
    margin: "3em"
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em"
    }
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em"
    }
  }
}))

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column">
              <Grid item onClick={() => props.setValue(0)} className={classes.link} component={Link} to="/">Home</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item onClick={() => {props.setValue(1); props.setSelectedIndex(0)}} className={classes.link} component={Link} to="/services">Services</Grid>
              <Grid item onClick={() => {props.setValue(1); props.setSelectedIndex(1)}} className={classes.link} component={Link} to="/customsoftware">Custom Software Development</Grid>
              <Grid item onClick={() => {props.setValue(1); props.setSelectedIndex(2)}} className={classes.link} component={Link} to="/mobileapps">Mobile Development</Grid>
              <Grid item onClick={() => {props.setValue(1); props.setSelectedIndex(3)}} className={classes.link} component={Link} to="/websites">Website Development</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item onClick={() => props.setValue(2)} className={classes.link} component={Link} to="/revolution">The Revolution</Grid>
              <Grid item onClick={() => props.setValue(2)} className={classes.link} component={Link} to="/revolution">Vision</Grid>
              <Grid item onClick={() => props.setValue(2)} className={classes.link} component={Link} to="/revolution">Technology</Grid>
              <Grid item onClick={() => props.setValue(2)} className={classes.link}component={Link} to="/revolution" >Process</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item onClick={() => props.setValue(3)} className={classes.link} component={Link} to="/about">About</Grid>
              <Grid item onClick={() => props.setValue(3)} className={classes.link} component={Link} to="/about">History</Grid>
              <Grid item onClick={() => props.setValue(3)} className={classes.link} component={Link} to="/about">Team</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item onClick={() => props.setValue(4)} className={classes.link} component={Link} to="/contact">Contact Us</Grid>
            </Grid>
          </Grid>
        </Grid>
        </Hidden>
      <img alt="black decorative slash" src={footerAdornment} className={classes.adornment} />


      <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
        <Grid item compnent={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
          <img alt="facebook logo" src={facebook} className={classes.icon} />
        </Grid>
        <Grid item compnent={"a"} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
          <img alt="twitter logo" src={twitter} className={classes.icon} />
        </Grid>
        <Grid item compnent={"a"} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
          <img alt="instagram logo" src={instagram} className={classes.icon} />
        </Grid>
      </Grid>  

    </footer>
  )
}

export default Footer;