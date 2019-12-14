import React from 'react'

const Price = props => {
  const originalPrice = Number(props.styles[props.selected]['original_price'])
  const salePrice = Number(props.styles[props.selected]['sale_price'])
  if (salePrice && props.styles) {
    console.log('ORIGINAL: ', originalPrice, 'SALE: ', salePrice)
    const discounted = originalPrice - salePrice
    return (
        <span class="discounted-price">${discounted} <span class="original-price">${originalPrice}</span></span>
    )
  } else if (props.styles) {
    return (
      <span class="normal-price">${originalPrice}</span>
    )
  } else {
    return <div></div>
  }
}

export default Price