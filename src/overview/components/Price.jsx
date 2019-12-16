import React from 'react'

const Price = props => {
  const originalPrice = Number(props.styles[props.selected]['original_price'])
  const salePrice = Number(props.styles[props.selected]['sale_price'])
  if (salePrice && props.styles) {
    const discounted = originalPrice - salePrice
    return (
        <span className="discounted-price">${discounted} <span className="original-price">${originalPrice}</span></span>
    )
  } else if (props.styles) {
    return (
      <span className="normal-price">${originalPrice}</span>
    )
  } else {
    return <div></div>
  }
}

export default Price