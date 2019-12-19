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
    <select value={props.value} onChange={props.handleChange}>
      <option value='default'>SELECT SIZE</option>
      {Object.keys(props.skus).filter(size => props.skus[size] !== 0).map(size => {
        return <option value={size}>{size}</option>
      })}
    </select>
  )
}

export default SizeSelector