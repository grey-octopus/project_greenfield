import React from 'react'

const ProdInfo = props => {
  return (
    <div id="prod-overview">
      <h3>{props.category}</h3>
      <h1>{props.title}</h1>
      {/* PRICE */}
    </div>
  )
}

export default ProdInfo