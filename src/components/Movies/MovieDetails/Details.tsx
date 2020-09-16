import React, { Component } from 'react';
import { tsConstructorType } from '@babel/types';
import VideoPlayer from './player';
import { movies } from '../../../api/movies';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

//@ts-ignore react video
import { Player } from 'video-react';
//@ts-ignore react video
import { DefaultPlayer as Video } from 'react-html5video';
import { moveCursor } from 'readline';
import 'react-html5video/dist/styles.css';

// import "../../../../node_modules/video-react/dist/video-react.css"; // import css
// import ''

interface Props {
}


const MovieDetail: React.FC<Props> = (props) => {
  const sources = ["./video/video.mp4", "./video/video.webm", "./video/video.ogv"]
  let { id } = useParams();
  let { path, url } = useRouteMatch();

  console.log(id);
  const movie = movies.find(m => m.id === id) || {
    id: 0,
    url: "default",
    poster: ""
  };

  // console.log(movie);
  //@ts-ignore asda
  // console.log(movie.url);

  return (

    <Video  loop
      controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
      poster={movie.poster || ''}
      onCanPlayThrough={() => {
        // Do stuff
      }}>
      <source src={movie.url || 'https://media.w3.org/2010/05/sintel/trailer.mp4'} type="video/mp4" />
    </Video>
  );
  // return (
  //   <Player
  //     playsInline
  //     poster={movie.poster}
  //     src={movie.url}
  //   />
  // );

}

export default MovieDetail;