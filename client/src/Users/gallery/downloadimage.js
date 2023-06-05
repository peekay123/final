import React, { useState } from 'react';
import Pets from '../pet/pets';
import './gallery.css';

const Gallery = () => {
  const [data, setData] = useState(Pets);
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? data.length : 8;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleImageClick = (image) => {
    window.open(image, '_blank');
  };

  return (
    <section className="gallery" id="gallery">
      <div className="heading">
        <h3>our gallery</h3>
      </div>
      <div className="gallery-container">
        {data.slice(0, itemsToShow).map((pet) => {
          const { id, image } = pet;
          return (
            <div key={id} className="box">
              <img
                src={image}
                alt=""
                onClick={() => handleImageClick(image)}
              />
              <div className="icon">
                <a href={image} download>
                  Download
                </a>
              </div>
            </div>
          );
        })}
      </div>
      {data.length > 8 && (
        <button className="show-more-button" onClick={toggleShowAll}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </section>
  );
};

export default Gallery;


//import React, { useState, useEffect, useRef } from 'react';
import Pets from '../pet/pets';
import './gallery.css';

import lightGallery from 'lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const Gallery = () => {
  const [data, setData] = useState(Pets);
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? data.length : 8;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      const gallery = lightGallery(galleryRef.current, {
        plugins: [lgZoom, lgThumbnail],
        preload: false,
        controls: true,
        mode: 'lg-fade',
        hideBarsDelay: 100,
        onAfterSlide: () => {
          const lightGalleryBackdrop = document.querySelector('.lg-backdrop');
          if (lightGalleryBackdrop) {
            lightGalleryBackdrop.style.backgroundImage = 'none';
          }
        }
      });

      return () => {
        gallery.destroy(); // Clean up the lightGallery instance when the component unmounts
      };
    }
  }, []);
  

  return (
    <section className="gallery" id="gallery">
      <div className="heading">
        <h3>our gallery</h3>
      </div>
      <div className="gallery-container" ref={galleryRef}>
        {data.slice(0, itemsToShow).map((pet) => {
          const { id, image } = pet;
          return (
            <a key={id} href={image} className="box" data-lg-size="1280-853">
              <img src={image} alt="" data-sec={image} />
              <div className="icon"></div>
            </a>
          );
        })}
      </div>
      {data.length > 8 && (
        <button className="show-more-button" onClick={toggleShowAll}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </section>
  );
};

export default Gallery;
