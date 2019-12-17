import React from 'react'

const getPosition = (index, position, numOfItems) => {
  if (index - position < 0) {
    return {order: numOfItems - Math.abs(index - position)}
  }
  const res = {order: index - position}
  return res;
}

const ImageCarousel = props => {
  const styleImages = props.styles[props.selected].photos
  return (
    <div id='image-carousel'>
      {styleImages.map((image, index) => {
        return (
          <div 
            className='gallery-img' 
            onClick={() => props.updateSelectedImage(index)} 
            style={getPosition(index, props.position, styleImages.length)}
          >
            <img src={image['thumbnail_url']} />
          </div> 
        )
      })}
    </div>
  )
}

export default ImageCarousel