import React from 'react'
// import { Link } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import './Header.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import { Auth } from '../../utils/Auth'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'black'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white"
  },
  link: {
    color: "white",
    margin: "10px"
  }
}));


const Header: React.FC = () => {
  const classes = useStyles();

  console.log(Auth.isLoggedIn())
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: 'black' }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src="https://avocomputing.com/images/icons/avo-logo.png" width="30px"></img>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link href="/" className={classes.link}>Home</Link>
            <Link href="/about" className={classes.link}>About</Link>
            <Link href="/tv" className={classes.link}>TV Shows</Link>
            <Link href="/movies" className={classes.link}>Movies</Link>
          </Typography>
          {Auth.isLoggedIn() ?
              <Link href="/logout" className={classes.link}>Logout</Link> :
              <Link href="/login" className={classes.link}>Login</Link>
            }
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
