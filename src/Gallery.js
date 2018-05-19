import React, { Component } from 'react';
import images from './samplePictures.js';
import defaultImage from './default-image.js';
import ReactSwipe from 'react-swipe';
import './Gallery.css';

class Gallery extends Component {
  next() {
    this.reactSwipe.next();
  }

  prev() {
    this.reactSwipe.prev();
  }

  render() {
    return (
      <div className="App">
        {images.length ?
          <div>
            <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} className="carousel" swipeOptions={{continuous: false}}>
              {images.map((image, index) => {
                return <div key={index}>
                        <div>{image.title ? image.title : 'No title for this image'}</div>
                        <img src={image.url} alt="The image Url is broken or can't be displayed" style={{maxWidth:'80%', maxHeight:'80vh'}}/>
                      </div>
              })}
            </ReactSwipe>
            <div>
              <button type="button" onClick={this.prev.bind(this)}>Prev</button>
              <button type="button" onClick={this.next.bind(this)}>Next</button>
            </div>
          </div>
          :
            <img src={defaultImage} alt='#' style={{maxWidth:'80%', maxHeight:'80vh'}}/>
          }
      </div>
    );
  }
}

export default Gallery;
