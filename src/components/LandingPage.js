import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/ui/ButtonArrow';
import animationData from '../animations/landinganimation/data'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%"
  }
}))

const LandingPage = () => {
  const classes = useStyles();

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
      <Grid container direction="column">
        <Grid item>

          <Grid container direction="row" justify="flex-end" alignItems="center">
            <Grid sm item>
              <Typography variant="h2" align="center">Bring West Coast Technology<br />to the Midwest</Typography>
              <Grid container>

                <Grid item>
                  <Button variant="contained">
                    Free Estimate
                  </Button>
                </Grid>

                <Grid item>
                  <Button variant="outlined">
                    Learn More
                    <ButtonArrow width={15} height={15} fill="red" />
                  </Button>
                </Grid>

              </Grid>
            </Grid>
            <Grid sm item className={classes.animation}>
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>

        </Grid>
      </Grid>
      
      </React.Fragment>
   );
}
 
export default LandingPage;