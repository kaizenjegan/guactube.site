import React from 'react';
import logo from './logo.svg';
import { HardwareDesktopWindows } from 'material-ui/svg-icons';
// import './App.css';
import  SignupForm  from '../Signup/Signup';
import {Auth} from '../../utils/Auth';

const Home: React.FC = () => {

  // window.location.replace('/movies');

  if (Auth.isLoggedIn()) {
    window.location.replace('/movies');
    return (<div> redirecting.. </div>)
    // return
  }


  return (<div>
              <SignupForm />
            </div>);
}

export default Home;
