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
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';
// import Card from '@material-ui/core/Card;'
// import Card from '@material-ui/core/Card;'

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
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: "8em 0",
      borderRadius: 0,
      wdith: "100%"
    }
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  }
}))

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
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
              <Typography variant="h2" align="center">Bringing West Coast Technology<br />to the Midwest</Typography>
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

        <Grid item> {/*---------iOS/ANDROID BLOCK ---------- */}
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

        <Grid item> {/*--------- REVOLUTION CARD ---------- */}
          <Grid container alignItems="center" justify="center" style={{height:"100em", marginTop: "12em"}}>
            <Card className={classes.revolutionCard}>
              <CardContent>
                <Grid container direction="column" style={{textAlign: "center"}}>
                  <Grid item>
                    <Typography variant="h3" gutterBottom>
                      The Revolution
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" gutterBottom>
                      Visionary insights couples with cutting-edget technology is a recipe for revolution.
                    </Typography>
                    <Button variant="outlined" className={classes.learnButton}>
                      Learn More
                    </Button>
                  </Grid>

                </Grid>
              </CardContent>
            </Card>
            <div className={classes.revolutionBackground} />
          </Grid>
        </Grid>

        <Grid item> {/*--------- INFORMATION BLOCK---------- */}
          <Grid container direction="row" alignItems="center" style={{height: "80em"}}>
  
            <Grid item container 
              style={{position: "absolute", textAlign: matchesXS ? "center" : "inherit"}} 
              direction={matchesXS ? "column" : "row"}
              spacing={matchesXS ? 10 : 0}
            >

              <Grid item sm style={{marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em"}}>
                <Grid container direction="column">
                  <Typography variant="h2" style={{color: "white"}}>
                    About Us
                  </Typography>
                  <Typography variant="subtitle2">
                    Let's get personal.
                  </Typography>
                  <Grid item>
                    <Button variant="outlined" className={classes.learnButton} style={{color: "white", borderColor: "white"}}>
                      Learn More
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item sm style={{marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em", textAlign: matchesXS ? "center" : "right"}}>
                <Grid container direction="column">
                  <Typography variant="h2" style={{color: "white"}}>
                    Contact Us
                  </Typography>
                  <Typography variant="subtitle2">
                    Say hello! <span frole="img" aria-label="waving hand">👋</span>
                  </Typography>
                  <Grid item>
                    <Button variant="outlined" className={classes.learnButton} style={{color: "white", borderColor: "white"}}>
                      Learn More
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

            </Grid>

            <div className={classes.infoBackground} />

          </Grid>
        </Grid>

      </Grid>
    </React.Fragment>
   );
}
 
export default LandingPage;