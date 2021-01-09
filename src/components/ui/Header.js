import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from '../../assets/logo.svg';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logo: {
    height: "6em"
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginRight: "25px",
    marginLeft: "50px",
    height: "45px"
  },
  menu : {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    brderRadius: 0
  },
  menuItem: {
    ...theme.typography.tab,
    "&:hover": {
      opacity: 1
    }
  }
}))

const Header = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleChange = (event, value) => {
    setValue(value);
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  }

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false)
  }

  const menuOptions = [
    { name: "Services", link: '/services'},
    { name: "Custom Software Development", link: '/customsoftware'},
    { name: "Mobile App Development", link: '/mobileapps'},
    { name: "Website Development", link: '/websites'}
  ]

  useEffect(() => {
    // if (window.location.pathname === "/" && value !== 0) {
    //   setValue(0)
    // } else if (window.location.pathname === "/services" && value !== 1) {
    //   setValue(1)
    // } else if (window.location.pathname === "/revolution" && value !== 2) {
    // setValue(2)
    // } else if (window.location.pathname === "/about" && value !== 3) {
    //   setValue(3)
    // } else if (window.location.pathname === "/contact" && value !== 4) {
    //   setValue(4)
    // } else if (window.location.pathname === "/estimate" && value !== 5) {
    //   setValue(5)
    // }

    switch (window.location.pathname){
      case "/":
        if (value !== 0) {
          setValue(0)
        }
        break;
      case "/services":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/customsoftware":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobileapps":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case "/websites":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case "/revolution":
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/about":
        if (value !== 3) {
          setValue(3);
        }
        break;
      case "/contact":
        if (value !== 4) {
          setValue(4);
        }
        break;
      case "/estimate":
        if (value !== 5) {
          setValue(5);
        }
        break;
      default: 
        break;
    }
  }, [value]);

  return ( 
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <Button 
              disableRipple 
              component={Link} 
              to='/' 
              onClick={()=> setValue(0)} 
              className={classes.logoContainer}>
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>
            <Tabs 
              value={value} 
              onChange={handleChange}
              indicatorColor="primary" 
              className={classes.tabContainer} 
            >
              <Tab 
                className={classes.tab} 
                component={Link} 
                to='/' 
                label="Home" 
              />
              <Tab 
                className={classes.tab} 
                component={Link} 
                to='/services' 
                label="Services" 
                aria-owns={anchorEl ? "simple-menu" : undefined} 
                aria-haspopup={anchorEl ? "simple-menu" : undefined}
                onMouseOver={(event) => handleClick(event)}
              />
              <Tab 
                className={classes.tab} 
                component={Link} 
                to='/revolution' 
                label="The Revolution" 
              />
              <Tab 
                className={classes.tab} 
                component={Link} 
                to='/about' 
                label="About Us" 
              />
              <Tab 
                className={classes.tab} 
                component={Link} 
                to='/contact' 
                label="Contact Us" 
              />
            </Tabs>
            <Button 
              variant="contained" 
              color="secondary" 
              className={classes.button}
            >
              Free Estimate
            </Button>
            <Menu 
              id="simple-menu" 
              anchorEl={anchorEl} 
              open={open} 
              onClose={handleClose}
              MenuListProps={{onMouseLeave: handleClose}}
              classes={{paper: classes.menu}}
              elevation={0}
            >
              {menuOptions.map((option, i) => (
                <MenuItem
                  key={option}
                  component={Link}
                  to={option.link}
                  classes={{root: classes.menuItem}}
                  onClick={(event) => {
                    handleMenuItemClick(event, i);
                    setValue(1);
                    handleClose()
                  }}  
                  selected={i === selectedIndex && value === 1 }
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </React.Fragment>
   );
}
 
export default Header;