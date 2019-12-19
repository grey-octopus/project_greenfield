import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SizeSelector from './SizeSelector.jsx'
import QtySelector from './QtySelector.jsx'

const AddToCart = props => {
  const prodId = useParams(prodId)
  const [selectedSize, setSelectedSize] = useState('default')
  const [selectedQty, setSelectedQty] = useState('default')
  const [heart, setHeart] = useState(false)
  const [sizeClass, setSizeClass] = useState('dropdown-closed')

  const handleSizeChange = e => {
    setSelectedSize(e.target.value)
    setSelectedQty('1')
    if (e.target.value === 'default') setSelectedQty('default')
  }

  const handleQtyChange = e => {
    setSelectedQty(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (selectedSize === 'default') {
      // setSizeClass('dropdown-opened')
    }
    else {
      console.log({ style: props.styles[props.selected], size: selectedSize, qty: selectedQty })
    }
  }

  const inlineStyle = props.skus['null'] === null ? { visibility: 'hidden' } : {}

  if (props.skus) {
    return (
      <form id='add-to-cart'>
        <SizeSelector skus={props.skus} value={selectedSize} handleChange={handleSizeChange} className={sizeClass}/>
        <QtySelector size={selectedSize} qty={selectedQty} skus={props.skus} selectedSize={selectedSize} handleChange={handleQtyChange} />
        <input type='submit' onClick={handleSubmit} value='ADD TO BAG' style={inlineStyle}></input>
        <button onClick={(e) => {
          e.preventDefault()
          heart === true ? setHeart(false) : setHeart(true)
        }}>{heart === true ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}</button>
      </form>                                                       
    )                                                                                                                             
  } else return <div></div>                   
}

export default AddToCart