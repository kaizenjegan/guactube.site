import React, { Component } from 'react';
import { tsConstructorType } from '@babel/types';
import VideoPlayer from './player';

interface Props {

}
const videoJsOptions = {
  sources: [{
    src: 'http://localhost:3001/assets/r_morty.mp4',
    type: 'video/mp4'
  }]
};

const MovieDetail: React.FC<Props> = (props) => {
  return (
    <VideoPlayer {...videoJsOptions} />
  );

}

export default MovieDetail;