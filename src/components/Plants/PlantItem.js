import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../cartSlice';

const PlantItem = ({ plant }) => {
  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(addItemToCart({
      id: plant.id,
      name: plant.name,
      price: plant.price,
      image: plant.image
    }));
  };
  
  return (
    <div className="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${plant.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default PlantItem;