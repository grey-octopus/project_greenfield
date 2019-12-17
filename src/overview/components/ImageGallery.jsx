import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ImageCarouselContainer from '../containers/ImageCarouselContainer.jsx'

const handleClick = (e, props) => {
  console.log('PROPS: ', props.position)
  return props.updatePosition(props.position, props.styles[props.selected].photos.length)
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
    const arrow = props.styles[props.selected].photos.length > 7 ? 
    <i 
      className="fas fa-chevron-down" 
      onClick={(e) => handleClick(e, props)}>
    </i>
    :
    <div></div>
    return (
      <div id='image-gallery' style={inlineStyle}>
        <ImageCarouselContainer />
        {arrow}
      </div>
    )
  } else return <div id='image-gallery'></div>

}

export default ImageGallery