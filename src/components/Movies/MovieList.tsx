import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './Movies.css';
// import  '../../movies.json'
import { GuacService } from '../../api/guac.service';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

interface Props { }

const MovieList: React.FC<Props> = (props) => {
  const [movies, setMovies] = useState([{ "name": "loading.." }]);
  let { path, url } = useRouteMatch();

  useEffect(() => {
    GuacService().getMovies().then((mv: any) => {
      setMovies(mv);
    });
  });


  return (
    <div>
      <h1>Video List</h1>
      <ul className="guac-movie-list">
      {movies.map((m: any) => {
        return <li><a href={`${path}/${m.id}`}>{m.name}</a></li>
      })}
      </ul>
    </div>


  );
}

export default MovieList;
