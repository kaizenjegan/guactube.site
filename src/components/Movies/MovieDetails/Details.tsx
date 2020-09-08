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
import { DefaultPlayer as Video } from 'react-html5video';
import { moveCursor } from 'readline';
// import 'react-html5video/dist/styles.css';

interface Props {

}
const videoJsOptions = {
  sources: [{
    src: 'hhttps://coolkidsvcdb.file.core.windows.net/atlanta-file-share/ATLANTA%20-%20S01%20E01%20-%20The%20Big%20Bang%20(720p%20Web-DL).mp4',
    type: 'video/mp4'
  }]
};

const MovieDetail: React.FC<Props> = (props) => {
  const sources = ["./video/video.mp4", "./video/video.webm", "./video/video.ogv"]
  let { id } = useParams();
  let { path, url } = useRouteMatch();

  console.log(id);
  const movie = movies.find(m => m.id === id) || {
    id: 0,
    url: "default"
  };

  // console.log(movie);
  //@ts-ignore asda
  // console.log(movie.url);

  return (

    <Video autoPlay loop muted
      controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
      // poster={movie.cover || ''}
      onCanPlayThrough={() => {
        // Do stuff
      }}>
      <source src={movie.url || 'https://media.w3.org/2010/05/sintel/trailer.mp4'} type="video/mp4" />
    </Video>
  );

}

export default MovieDetail;