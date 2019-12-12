import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import MovieList from './MovieList';
import Details from './MovieDetails/Details';


interface Props {

}

const Movies: React.FC<Props> = (props) => {
  let { path, url } = useRouteMatch();
  console.log(url);
  console.log(path);
  return (
    <Router>

      <Switch>
        {/* <Route exact path="/movies"> */}
        <Route exact path={path}>
          {/* <Home /> */}
          <MovieList />
        </Route>
        <Route path={`${path}/:id`}>
          {/* <Topics /> */}
          {/* <h1> id </h1> */}
          <Details />
        </Route>
      </Switch>
    </Router>
  )

}

export default Movies;