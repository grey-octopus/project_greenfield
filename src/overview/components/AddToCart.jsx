import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SizeSelector from './SizeSelector.jsx'
import QtySelector from './QtySelector.jsx'

const AddToCart = props => {
  const prodId = useParams(prodId)
  const [selectedSize, setSelectedSize] = useState('default')
  const [selectedQty, setSelectedQty] = useState('default')

  const handleSizeChange = e => {
    setSelectedSize(e.target.value)
    setSelectedQty('1')
    if (e.target.value === 'default') setSelectedQty('default')
  }

  const handleQtyChange = e => {
    setSelectedQty(e.target.value)
  }

  if (props.skus) {
    return (
      <form id='add-to-cart'>
        <SizeSelector skus={props.skus} value={selectedSize} handleChange={handleSizeChange} />
        <QtySelector size={selectedSize} qty={selectedQty} skus={props.skus} selectedSize={selectedSize} handleChange={handleQtyChange} />
      </form>                                                       
    )                                                                                                                             
  } else return <div></div>                   
}

export default AddToCart