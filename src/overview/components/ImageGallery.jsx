import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ImageCarouselContainer from '../containers/ImageCarouselContainer.jsx'

const handleClick = (e, props) => {
  return props.updatePosition(props.position, props.styles[props.selected].photos.length, true)
}

const handleUpClick = (e, props) => {
  return props.updatePosition(props.position, props.styles[props.selected].photos.length, false)
}

const ImageGallery = props => {
  const { prodId } = useParams()
  useEffect(() => {
    props.fetchStyles(prodId)
  }, [])
  if (props.styles && props.selected !== undefined) {
    const inlineStyle = {
      backgroundImage: `url(${props.styles[props.selected].photos[props.selectedImage].url})`
    }
    const arrow = props.styles[props.selected].photos.length > 7 && props.position !== props.styles[props.selected].photos.length - 1 ? 
    <i 
      className="fas fa-chevron-down" 
      onClick={(e) => handleClick(e, props)}>
    </i>
    :
    null
    const upArrow = props.position ?
      <i 
        id='up-arrow'
        className='fas fa-chevron-up'
        onClick={(e) => handleUpClick(e, props)}>
      </i>
      :
      null
    return (
      <div id='image-gallery' style={inlineStyle}>
        {upArrow}
        <ImageCarouselContainer />
        {arrow}
      </div>
    )
  } else return <div id='image-gallery'></div>

}

export default ImageGallery