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

const handleRightClick = (e, props) => {
  const photos = props.styles[props.selected].photos
  props.updateSelectedImage(props.selectedImage + 1)
  console.log('SELECTED: ', props.selectedImage, 'QUEUE: ', props.queue.top)
  // if selected image is past carousel end, adjust carousel
  if (props.selectedImage + 1 > props.queue.top - 2) {
    props.queue.push(photos[props.selectedImage + 1])
    const newQueue = JSON.parse(JSON.stringify(props.queue))
    newQueue.push = props.queue.push
    newQueue.inject = props.queue.inject
    props.updateQueue(newQueue)
    console.log(props.queue)
  }
}

const handleLeftClick = (e, props) => {
  const photos = props.styles[props.selected].photos
  props.updateSelectedImage(props.selectedImage - 1)
  console.log(props.selectedImage - 1, props.queue.bottom)
  if (props.selectedImage - 1 < props.queue.bottom) {
    props.queue.inject(photos[props.selectedImage - 1])
    const newQueue = JSON.parse(JSON.stringify(props.queue))
    newQueue.push = props.queue.push
    newQueue.inject = props.queue.inject
    props.updateQueue(newQueue)
  }
}

const ImageGallery = props => {
  const { prodId } = useParams()
  
  useEffect(() => {
    props.fetchStyles(prodId)
  }, [prodId])

  if (props.styles && props.queue === undefined) {
    const photos = props.styles[props.selected].photos
    props.updateQueue(new Dequeue(7, photos.slice(0, 7, photos.length)))
  }

  if (props.styles && props.selected !== undefined && props.queue) {
    const photos = props.styles[props.selected].photos
    const inlineStyle = {
      backgroundImage: `url(${props.styles[props.selected].photos[props.selectedImage].url})`
    }
    const downArrow = photos.length > 7 && props.queue.queue[props.queue.top - 2]?.url !== photos[photos.length - 1].url ? 
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
      console.log(props.selectedImage, photos.length - 1)
      const rightArrow = 
      props.selectedImage === photos.length - 1 ? // end of photos 
      null
      :
      <i 
        className="fas fa-arrow-right"
        onClick={e => handleRightClick(e, props)}>
      </i>

    const leftArrow = props.selectedImage !== 0 ?
      <i
        className='fas fa-arrow-left'
        onClick={e => handleLeftClick(e, props)}>
      </i>
      :
      null

    return (
      <div id='image-gallery' style={inlineStyle}>
        {upArrow}
        {rightArrow}
        {leftArrow}
        <ImageCarouselContainer />
        {downArrow}
      </div>
    )
  } else return <div id='image-gallery'></div>

}

export default ImageGallery