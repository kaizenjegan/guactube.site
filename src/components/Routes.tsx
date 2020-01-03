import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home';
import About from './About/About';
import Movies from './Movies/';
import TvList from './TV/TvList';
import Login from './Login/Login';
import Logout from './Logout/Logout';
import AuthContextProvider from "../Context/Auth";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Routes = () => (
  <AuthContextProvider>
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/tv' component={TvList} />
        <Route path='/movies' component={Movies} />
        <Route path='/login' component={Login} />
        <Route path='/Logout' component={Logout} />
      </Switch>
    </main>
  </AuthContextProvider>
)

export default Routes
