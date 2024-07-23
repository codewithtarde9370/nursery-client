import React, { useEffect, useState } from 'react';
import './Home.css';
import PlantCard from '../../components/PlantCard/PlantCard';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast';

function Home() {
    //jab jab yaha data ayega turanta change will br reflected and display on the screen

    const [plantArray, setPlantArray] = useState([]);

    const loadPlant = async () => {
        toast.loading("Loading Plants Details....")
        const response = await axios.get('http://localhost:3000/plants')
toast.dismiss()

        toast.success("Plants Loaded successfully!")
        setPlantArray(response.data.data)
    }
    

    useEffect(()=>{
        loadPlant();
    },[])

  return (
  <>
  <h1>Plants View</h1>
  <div className='plants-container'>

{
    
 plantArray.map((plant,i) => {
   const { 
        id,
        name,
        image,
        description,
        price
    } = plant
    
            return <PlantCard 
            key={i}
            id={id} 
            name={name}
             price={price}
             description={description}
             image={image}/>
        })
}
<Toaster/>
  </div>

  </>)
}

export default Home