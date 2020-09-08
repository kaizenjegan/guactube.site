import React, { useState, useContext } from "react";
import logo from './logo.svg';
// import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { GuacService } from '../../api/guac.service'
import { makeStyles } from '@material-ui/core/styles';
import { AuthContext } from '../../Context/Auth';
import AuthContextProvider from '../../Context/Auth';
import './Login.css';

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

//todo move to form
const Login: React.FC = () => {
  const classes = useStyles();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { Login } = useContext(AuthContext);

  const handleLogin = (username: String, password: String): void => {
    console.log("login");
    console.log(username);
    console.log(password);

    if (!username) {
      //validation
    }

    if (!password) {

    }

    if (username === "guest" && password.trim() === 'smokegoodeatgoodlivegood') {

      GuacService().login(username, password).then(data => {
        //redirect
        console.log('login successful');
        window.location.replace('/'); //todo: use history
      }, err => {
        console.log(err);
      })
    }
  }

  return (
    <div className={classes.root}>
      <h1>Login</h1>
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
      <br />
      <Button onClick={() => handleLogin(username, password)} variant="contained" color="primary">
        Login
      </Button>
    </div>
  );
}

export default Login;
