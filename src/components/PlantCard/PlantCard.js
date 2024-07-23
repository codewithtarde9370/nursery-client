import React from 'react'
import './PlantCard.css'

function PlantCard({id,name,price,image,description}) {
  return (
    <div className='plantcard-container'>
        <h2 className='plant-Name'>{name}</h2>
        <img className='plant-img' alt='plant in the card' src={image}/>
        <h4>Price:&#8377;
        {price}</h4>
        <div className='plant-des'>{description}</div>
    </div>
  )
}

export default PlantCard