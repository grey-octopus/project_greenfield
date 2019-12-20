import React from 'react'

const ImageCarousel = props => {
  if (props.isExpanded) {
    return (
      <div id='image-carousel'>
        {props.queue.queue.map((image, index) => ({image, index})).filter(elem => elem.image !== null).map(elem => {
        return (
          <div
            className={elem.index !== props.selectedImage ? 'gallery-img-icon' : 'gallery-img-icon-selected' /* CHAGE CLASSES HERE */}
            onClick={() => {
              props.updateSelectedImage(elem.index)
            }}
          >
            <i class="far fa-circle"></i>
          </div>
        )
      })}
      </div>
    )
  } else {
    return (
      <div id='image-carousel'>
        {/* map image elements to preserve their orignal indicides, filter out those without images, map to divs w/
         onClicks bound to preserved indices */}
        {props.queue.queue.map((image, index) => ({image, index})).filter(elem => elem.image !== null).map(elem => {
          return (
            <div
              className={elem.index !== props.selectedImage ? 'gallery-img' : 'gallery-img-selected'}
              onClick={() => {
                props.updateSelectedImage(elem.index)
              }}
            >
              <img src={elem.image['thumbnail_url']} />
            </div>
          )
        })}
      </div>
    )
  }  
}

export default ImageCarousel