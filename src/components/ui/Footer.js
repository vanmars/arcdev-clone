import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import footerAdornment from '../../assets/Footer Adornment.svg'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

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
  }
}))

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
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
      <img alt="black decorative slash" src={footerAdornment} className={classes.adornment} />
    </footer>
  )
}

export default Footer;