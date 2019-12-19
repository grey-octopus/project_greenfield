import React from 'react'
import Dequeue from '../dequeue.js'

const Style = props => {
  const thumbnail = props.styles[props.index].photos[0].thumbnail_url
  const innerStyle = {
    backgroundImage: `url(${thumbnail || '/img/placeholder-style.png'})`
  }
  const check = props.selected === props.index ? 
    (
      <div className="checkmark">
        <i className='material-icons'>check</i>
      </div>
    ) : null
  return (
    <button className="style-btn" style={innerStyle} onClick={() => {
      props.updateQueue(new Dequeue(7, props.styles[props.index].photos.slice(0, 7)))
      props.updateSelectedImage(0)
      props.updateSelected(props.index)
    }}>
      {check}
    </button>
  )
}

export default Style;