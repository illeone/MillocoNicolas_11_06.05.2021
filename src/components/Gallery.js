import React, {useState} from "react";
import {ReactComponent as LeftArrow} from '../assets/left.svg';
import {ReactComponent as RightArrow} from '../assets/right.svg';


const Gallery = ({photos}) => {
    const [currentImage, setCurrentImage] = useState(0)
    const length = photos?.length
    // console.log(length)

    const previousImg = () => {
      if (currentImage === 0) {
        setCurrentImage(length - 1)
      } else {
        setCurrentImage(currentImage - 1)
      }
    }
    const nextImg = () => {
      if (currentImage === length - 1) {
        setCurrentImage(0)
      } else {
        setCurrentImage(currentImage + 1)
      }
    }
    // console.log(currentImage)
  
    return (
      <section className="gallery">

        {photos?.map((photo, index) => {
          return (
            <div key={index} className="">         
              {index === currentImage && (<img src={photo} alt="" className="gallery_image" />)}
            </div>
            
            )
            })}
            <div>
                <LeftArrow onClick={previousImg} className="left_arrow" style={{background:"blue"}} />
                <RightArrow onClick={nextImg} className="right_arrow" style={{background:"blue"}} />
            </div>
        
      </section>
    )
  }

export default Gallery;