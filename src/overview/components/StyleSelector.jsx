import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import StyleContainer from '../containers/StyleContainer.jsx'
import PriceContainer from '../containers/PriceContainer.jsx'

const StyleSelector = props => {
  const { prodId } = useParams()
  useEffect(() => { props.fetchStyles(prodId) }, [])
  if (props.styles) {
    return (
      <div id="style-selector">
        <PriceContainer />
        <h3 id='selected-outer'>STYLE > <span id='selected-label'>{props.styles[props.selected].name.toUpperCase()}</span></h3>
        <div id='style-btns'>
          {props.styles.map((style, index) => {
            return <StyleContainer index={index} />
          })}
        </div>
      </div>
    )
  } else return (<div id='style-btns'></div>)
}

export default StyleSelector