import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlantsStart, fetchPlantsSuccess, fetchPlantsFailure } from '../../plantsSlice';

const PlantsList = () => {
  const dispatch = useDispatch();
  const { plants, loading, error } = useSelector(state => state.plants);
  
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        dispatch(fetchPlantsStart());
        const response = await fetch('https://api.example.com/plants');
        const data = await response.json();
        dispatch(fetchPlantsSuccess(data));
      } catch (err) {
        dispatch(fetchPlantsFailure(err.message));
      }
    };
    
    fetchPlants();
  }, [dispatch]);
  
  if (loading) return <div>Loading plants...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div className="plants-list">
      {plants.map(plant => (
        <PlantItem key={plant.id} plant={plant} />
      ))}
    </div>
  );
};

export default PlantsList;