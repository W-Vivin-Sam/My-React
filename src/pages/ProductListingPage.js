import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice';
import { markAsAdded } from '../features/plants/plantsSlice';
import './ProductListingPage.css';

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const { plants, categories } = useSelector(state => state.plants);
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItemToCart({
      id: plant.id,
      name: plant.name,
      price: plant.price,
      image: plant.image
    }));
    dispatch(markAsAdded(plant.id));
  };

  const getPlantsByCategory = (category) => {
    return plants.filter(plant => plant.category === category);
  };

  return (
    <div className="product-listing-page">
      <h1>Our Houseplants</h1>
      
      {categories.map(category => {
        const categoryPlants = getPlantsByCategory(category);
        if (categoryPlants.length === 0) return null;
        
        return (
          <section key={category} className="plant-category">
            <h2>{category}</h2>
            <div className="plant-grid">
              {categoryPlants.map(plant => (
                <div key={plant.id} className="plant-card">
                  <img 
                    src={plant.image} 
                    alt={plant.name} 
                    className="plant-thumbnail"
                  />
                  <h3>{plant.name}</h3>
                  <p>${plant.price.toFixed(2)}</p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={plant.addedToCart || cartItems.some(item => item.id === plant.id)}
                    className={plant.addedToCart ? 'added-to-cart' : ''}
                  >
                    {plant.addedToCart ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ProductListingPage;