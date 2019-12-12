import React, { useState } from "react";
import logo from './logo.svg';
import { HardwareDesktopWindows } from 'material-ui/svg-icons';
// import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  input: {
    color: "white"
  }
}));

const SignupForm: React.FC = () => {
  const classes = useStyles();
  // window.location.replace('/movies');
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordContirm, setPasswordConfirm] = useState<string>("");

  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");

  const handleLogin = (username: String, password: String): void => {
  }

  return (
    <div className={classes.root}>
      <h1>Signup </h1>
      <TextField
        id="standard-search"
        label="First Name"
        type="username"
        className={classes.root}
        value={firstname}
        onChange={e => setFirstname(e.target.value)}
      />

      <TextField
        id="standard-search"
        label="Last Name"
        type="username"
        className={classes.root}
        value={lastname}
        onChange={e => setLastname(e.target.value)}
      />

      <br />
      <TextField
        id="standard-search"
        label="Username"
        type="username"
        className={classes.root}
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      {/* cz im lazy */}
      <br />
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <TextField
        id="standard-password-input"
        label="Confirm"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        color="primary"
      />
      <br />
      <Button onClick={() => handleLogin(username, password)} variant="contained" color="secondary">
        signup
        </Button>
    </div>
  );
}

export default SignupForm;
