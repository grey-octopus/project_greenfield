import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import StyleContainer from '../containers/StyleContainer.jsx'

const StyleSelector = props => {
  const { prodId } = useParams()
  useEffect(() => { props.fetchStyles(prodId) }, [])
  if (props.styles) {
    return (
      <div id='style-btns'>
        {props.styles.map((style, index) => {
          return <StyleContainer index={index} />
        })}
      </div>
    )
  } else return (<div id='style-btns'></div>)
}

export default StyleSelector