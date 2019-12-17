import React from 'react'

const Price = props => {
  const originalPrice = Number(props.styles[props.selected]['original_price'])
  const salePrice = Number(props.styles[props.selected]['sale_price'])
  if (salePrice && props.styles) {
    const discounted = originalPrice - salePrice
    return (
        <p className="discounted-price">${discounted} <span className="original-price">${originalPrice}</span></p>
    )
  } else if (props.styles) {
    return (
      <p className="normal-price">${originalPrice}</p>
    )
  } else {
    return <div></div>
  }
}

export default Price