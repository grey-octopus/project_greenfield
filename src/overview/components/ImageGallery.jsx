import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ImageCarouselContainer from '../containers/ImageCarouselContainer.jsx'
import Dequeue from '../dequeue.js'

const handleDownClick = (e, props) => {
  const photos = props.styles[props.selected].photos
  props.queue.push(photos[props.queue.top - 1])
  const newQueue = JSON.parse(JSON.stringify(props.queue))
  newQueue.push = props.queue.push
  newQueue.inject = props.queue.inject
  props.updateQueue(newQueue)
}

const handleUpClick = (e, props) => {
  const photos = props.styles[props.selected].photos
  props.queue.inject(photos[props.queue.bottom - 1])
  const newQueue = JSON.parse(JSON.stringify(props.queue))
  newQueue.push = props.queue.push
  newQueue.inject = props.queue.inject
  props.updateQueue(newQueue)
}

const ImageGallery = props => {
  const { prodId } = useParams()
  
  useEffect(() => {
    props.fetchStyles(prodId)

  }, [prodId])

  if (props.styles && props.queue === undefined) {
    const photos = props.styles[props.selected].photos
    props.updateQueue(new Dequeue(7, photos.slice(0, 7)))
  }

  if (props.styles && props.selected !== undefined && props.queue) {
    const photos = props.styles[props.selected].photos
    const inlineStyle = {
      backgroundImage: `url(${props.styles[props.selected].photos[props.selectedImage].url})`
    }

    const downArrow = props.queue.queue[props.queue.top - 2].url !== photos[photos.length - 1].url ? 
    <i 
      className="fas fa-chevron-down" 
      onClick={(e) => handleDownClick(e, props)}>
    </i>
    :
    null
    
    const upArrow = !props.queue.queue[0] ?
      <i 
        id='up-arrow'
        className='fas fa-chevron-up'
        onClick={(e) => handleUpClick(e, props)}>
      </i>
      :
      null

      // const rightArrow = photos.length - 1 > 1 && photos[props.selectedImage].url !== photos[photos.length - 1].url ?
      // <i 
      //   className="fas fa-arrow-right"
      //   onClick={e => handleRightClick(e, props)}>
      // </i>
      // :
      // null
    return (
      <div id='image-gallery' style={inlineStyle}>
        {upArrow}
        {/* {rightArrow} */}
        <ImageCarouselContainer />
        {downArrow}
      </div>
    )
  } else return <div id='image-gallery'></div>

}

export default ImageGallery