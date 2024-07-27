import React,{useEffect, useState} from 'react';
import './UpdatedPlant.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function UpdatedPlant() {
  const {id} = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const updatePlant = async () => {
    const response = await axios.put(`${process.env.REACT_APP_API_URL}/plant/${id}`,

      {
        name:name,
        image:image,
        description:description,
        price:price
      }
    )
toast.success(response.data.message)

  }
  const loadPlant = async (id) =>{
  if(!id){
    return
  }
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/plant/${id}`)
    

    const {name, image, price, description} = response.data.data;

    setName(name);
    setDescription(description);
    setImage(image);
    setPrice(price);

  }

  useEffect(()=>{
      loadPlant()
  },[id])
  return (

    <div>Plant : {id} 
    <form className="plant-form" >
                <h2>Add New Plant</h2>
                <label>
                    Plant Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Description:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
                <img src={image} className='img-preview'alt='plant-img' />
                <label>
                    Image URL:
                    <input
                        type="url"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Price:
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" className="update-btn" onClick={updatePlant}>Update Plant</button>
            </form>
            <Link to="/" className='home-link'><span className='text'>View Plants</span><button className='home-btn'>Home</button></Link>
            <Toaster/>
            </div>
  )
}

export default UpdatedPlant