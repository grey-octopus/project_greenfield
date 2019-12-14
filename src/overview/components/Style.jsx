import React from 'react'

const Style = props => {
  const thumbnail = props.styles[props.index].photos[0].thumbnail_url
  const innerStyle = {
    backgroundImage: `url(${thumbnail})`
  }
  const check = props.selected === props.index ? 
    (
      <div className="checkmark">
        <i className='material-icons'>check</i>
      </div>
    ) : null
  console.log('check: ', check)
  return (
    <button className="style-btn" style={innerStyle} onClick={() => props.updateSelected(props.index) /* CREATE THIS ACTION */}>
      {check}
    </button>
  )
}

export default Style;