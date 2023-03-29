import React from 'react';
import './Illustration.css';
import { useState } from 'react';
import chalion from '../assets/IMGportfolio/chalion.jpg';
import fractal from '../assets/IMGportfolio/fractal.png';
import frippery from '../assets/IMGportfolio/frippery.png';
import koylee from '../assets/IMGportfolio/koylee.png';
import lolly from '../assets/IMGportfolio/lolly.png';
import lollyfen from '../assets/IMGportfolio/lollyfen.png';
import luta from '../assets/IMGportfolio/luta.png';
import mermay from '../assets/IMGportfolio/mermay.png';
import meron from '../assets/IMGportfolio/meron.jpg';
import petrin from '../assets/IMGportfolio/petrin.png';
import ripper from '../assets/IMGportfolio/ripper.jpg';
import rowan from '../assets/IMGportfolio/rowan.jpeg';
import simler from '../assets/IMGportfolio/simler.jpg';
import tinna from '../assets/IMGportfolio/tinna.jpeg';
import visa from '../assets/IMGportfolio/visa.png';

const images = [lollyfen, visa, petrin, fractal, simler, rowan, meron, tinna, lolly, luta, koylee, mermay, chalion, frippery, ripper]

// MAIN FUNCTION
// TODO
// use thumbnails rather than cropping IMGs
function Illustration () {

    const [imageToShow, setImageToShow] = useState('');
    const [lightboxDisplay, setLightboxDisplay] = useState(false);

    // CREATE IMAGE CARDS
    // images.map iterates over "images" array
        // after the = is the parameter
    // images.map(creates a new array and populates it with what's in the parentheses)
        // "map" calls the function in parentheses once for each element in an array
        // i think??? image = images[i]
        // after the => is what the function actually *does*
    const imageCards = images.map((image) => (
        <img className='image-card' alt='thumbnail'
        onClick={() => showImage(image)}
        src={image} /> )
    )


    // shows specific image in the lightbox, displays lightbox
    const showImage = (image) => {
        setImageToShow(image);
        setLightboxDisplay(true);
    };

    // hides lightbox
    const hideLightBox = () => {
        setLightboxDisplay(false);
    }

    // shows next image in lightbox
    const showNext = (event) => {
        event.stopPropagation();

        let currentIndex = images.indexOf(imageToShow);
        
        if (currentIndex >= images.length - 1) {
            currentIndex = 0;
            let nextImage = images[currentIndex];
            setImageToShow(nextImage);
        } else {
            let nextImage = images[currentIndex + 1];
            setImageToShow(nextImage);
        }
    }

    // shows previous image in lightbox
    const showPrev = (event) => {
        event.stopPropagation();
        
        let currentIndex = images.indexOf(imageToShow);

        if (currentIndex <= 0) {
            currentIndex = images.length - 1;
            let nextImage = images[currentIndex];
            setImageToShow(nextImage);
        } else {
            let nextImage = images[currentIndex - 1];
            setImageToShow(nextImage);
        }
    }

    return (
        <div id='Gallery'>
            {imageCards}
        
            {
                lightboxDisplay ?
                <div id='Lightbox' onClick={hideLightBox}>
                    <button onClick={showPrev}>◀</button>
                    <img id='LightboxImage' src={imageToShow} alt='portfolio piece'></img>
                    <button onClick={showNext}>▶</button>
                </div>
                : ''
            }

        </div>

    );
}

export default Illustration;