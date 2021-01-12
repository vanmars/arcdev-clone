import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/ui/ButtonArrow';
import animationData from '../animations/landinganimation/data'
import Typography from '@material-ui/core/Typography';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em"
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  buttonContainer: {
    marginTop: "1em"
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7em",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em"
    }
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "2em"
    }
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange
  },
  subtitle: {
    marginBottom: "1em"
  },
  icon: { 
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25
    }
  }
  
}))

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return ( 
    <React.Fragment>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item> {/*---------HERO BLOCK ---------- */}
          <Grid container direction="row" justify="flex-end" alignItems="center">
            <Grid sm item clasName={classes.heroTextContainer}>
              <Typography variant="h2" align="center">Bring West Coast Technology<br />to the Midwest</Typography>
              <Grid container justify="center" className={classes.buttonContainer}>
                <Grid item>
                  <Button className={classes.estimateButton} variant="contained">
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" className={classes.learnButtonHero}>
                    Learn More
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item className={classes.animation}>
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item> {/*---------CUSTOM SOFTWARE BLOCK ---------- */}
          <Grid container direction="row" justify={matchesSM ? "center" : undefined } className={classes.serviceContainer}>
            <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
              <Typography variant="h4">
                Custom Software Development
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Save Energy. Save Time. Save Money.
              </Typography>
              <Typography variant="subtitle1">
                Complete digital solutions, from investigation to {" "}
                <span className={classes.specialText}>celebration.</span>
              </Typography>
              <Button variant="outlined" className={classes.learnButton}>
                Learn More
              </Button>
            </Grid>
            <Grid item>
              <img alt="custom software icon" src={customSoftwareIcon} className={classes.icon} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item> {/*---------iOS/ANDROED BLOCK ---------- */}
          <Grid container direction="row" justify={matchesSM ? "center" : "flex-end" } className={classes.serviceContainer}>
            <Grid item style={{textAlign: matchesSM ? "center" : undefined}}>
              <Typography variant="h4">
                iOS/Android App Development
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Extend Functionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography variant="subtitle1">
                Integrate your web experience or create a standalone app {matchesSM ? null : <br />} with either mobile platform.
              </Typography>
              <Button variant="outlined" className={classes.learnButton}>
                Learn More
              </Button>
            </Grid>
            <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
              <img alt="mobile phone icon" src={mobileAppsIcon} className={classes.icon} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item> {/*---------WEBSITES BLOCK ---------- */}
          <Grid container direction="row" justify={matchesSM ? "center" : undefined } className={classes.serviceContainer}>
            <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
              <Typography variant="h4">
                Website Development
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant="subtitle1">
                Optimized for Search Engines. Built for speed.
              </Typography>
              <Button variant="outlined" className={classes.learnButton}>
                Learn More
              </Button>
            </Grid>
            <Grid item>
              <img alt="website icon" src={websitesIcon} className={classes.icon} />
            </Grid>
          </Grid>
        </Grid>

      </Grid>
      
      </React.Fragment>
   );
}
 
export default LandingPage;