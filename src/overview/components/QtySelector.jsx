import React from 'react'

const QtySelector = props => {
  let qtys = []
  const limit = props.skus[props.selectedSize] < 15 ? props.skus[props.selectedSize] : 15
  for (let i = 1; i <= limit; i++) {
    qtys.push(i)
  }
  
  if (props.selectedSize === 'default') {
    return (
      <select disabled id='qty-selector' className='cart-btns'>
        <option value='disabled'>-</option>
      </select>
    )
  } else {
    return (
      <select id='qty-selector' className='cart-btns' value={props.qty} onChange={props.handleChange} >
        {qtys.map(qty => {
          return <option value={qty}>{qty}</option>
        })}
      </select>
    )
  }


}

export default QtySelector