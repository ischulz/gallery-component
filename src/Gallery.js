import React, { Component } from 'react';
import images from './samplePictures.js';
import './Gallery.css';

class Gallery extends Component {
  render() {
    return (
      <div className="App">
        {images.map((image) => {
         return <img src={image.url} alt='#' style={{maxWidth:'80%'}}/>
        })}
      </div>
    );
  }
}

export default Gallery;
