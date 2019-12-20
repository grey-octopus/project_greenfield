import React from 'react'

const ProdInfo = props => {
  return (
    <div id="prod-info">
      <h3>{props.category}</h3>
      <h1>{props.title}</h1>
    </div>
  )
}

export default ProdInfo