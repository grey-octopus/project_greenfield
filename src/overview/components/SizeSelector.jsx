import React from 'react'

const SizeSelector = props => {
  if (props.skus['null'] === null) {
    return (
      <select value={'null'} disabled>
        <option value='null'>OUT OF STOCK</option>
      </select>
    )
  }
  return (
    <select id='size-selector' value={props.value} onChange={props.handleChange} className={props.className} className='cart-btns'>
      <option value='default' className='cart-btns'>SELECT SIZE</option>
      {Object.keys(props.skus).filter(size => props.skus[size] !== 0).map(size => {
        return <option className='cart-btns' value={size}>{size}</option>
      })}
    </select>
  )
}

export default SizeSelector