import React, { useState } from 'react';
import './AddPlant.css';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AddPlant() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log({ name, description, image, price });
    };
    const addPlant = async () => {
toast.loading("Adding Plant Details.....")

        if(!name || !image || !price || description){
            toast.error("Details are Empty..Please Fill all the details!")
        }
      toast.dismiss();
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/plant` , {
        name:name,
        description:description,
        price:price,
        image:image
      });
      console.log(response)
      toast.success(response.data.message)

      setName("");
      setDescription("");
      setImage("")
      setPrice("")
    }

    return (
        <>
            <form className="plant-form" onSubmit={handleSubmit}>
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
                <img src={image} className='img-preview' />
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
                <button type="submit" className="add-btn" onClick={addPlant}>Add Plant</button>
            </form>
            <Toaster/>
            <Link to="/" className='home-link'><span className='text'>View Plants</span><button className='home-btn'>Home</button></Link>
        </>
    );
}

export default AddPlant;
