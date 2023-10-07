import React from 'react'
import cardOne from '../images/bg-card-front.png'
import cardTwo from '../images/bg-card-back.png'

const Card = () => {
  return (
    <div className='cards'>
        <img src={cardOne} alt="front" className='front' />
        <img src={cardTwo} alt="back" className='back' />
    </div>
  )
}

export default Card