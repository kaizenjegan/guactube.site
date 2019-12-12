import React, { Component } from 'react';
import videojs from 'video.js';
import { tsConstructorType } from '@babel/types';
import VideoPlayer from './player';

interface Props {

}
const videoJsOptions = {
  autoplay: true,
  controls: true,
  width: "1000",
  sources: [{
    src: 'http://localhost:3001/assets/rickAndMorty03.mp4',
    type: 'video/mp4'
  }]
};

const MovieDetail: React.FC<Props> = (props) => {
  return (
    <VideoPlayer {...videoJsOptions} />
  );

}

export default MovieDetail;