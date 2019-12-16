import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ImageGallery = props => {
  const { prodId } = useParams()
  useEffect(() => {
    props.fetchStyles(prodId)
  }, [])
  if (props.styles && props.selected !== undefined) {
    const inlineStyle = {
      backgroundImage: `url(${props.styles[props.selected].photos[props.selectedImage].url})`
    }
    return (
      <div id='image-gallery' style={inlineStyle}>
        
      </div>
    )
  } else return <div id='image-gallery'></div>

}

export default ImageGallery