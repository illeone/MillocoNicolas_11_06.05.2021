import React, {useState} from "react";



const Gallery = ({photos}) => {
    const [currentImage] = useState(0)

    console.log(currentImage)
  
    return (
      <section className="">

        {photos?.map((photo, index) => {
          return (
            <div key={index} className="">         
              {index === currentImage && (<img src={photo} alt="" className="" />)}
            </div>
            )
            })}
        
      </section>
    )
  }

export default Gallery;