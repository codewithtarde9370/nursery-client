import React from 'react'
import './PlantCard.css'
import toast from 'react-hot-toast'
import axios from 'axios';
import { Link } from 'react-router-dom';

function PlantCard({ _id, name, price, image, description, loadPlant }) {
  const deletePlant = async (plantId) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_API_URL}/plant/${plantId}`);
      toast.success(response.data.message);
    } catch (error) {
      toast.error('Failed to delete plant');
    }
    loadPlant()
  };
  return (
    <div className='plantcard-container'>
        <h2 className='plant-Name'>{name}</h2>
        <img className='plant-img' alt='plant in the card' src={image}/>
        <h4>Price:&#8377;
        {price}</h4>
        <div className='plant-des'>{description}</div>
        <div className='btns'>
          <button 
          className='delete-btn'
          onClick={() => {
            deletePlant(_id)
          }}>Delete</button> 
         <Link to={`/Update/${_id}`}> <button 
          className='update-btn'
          // onClick={() => {
          //   updatePlant(id)
          // }}
          >Update</button> </Link>
        </div>
    </div>
  )
}

export default PlantCard