import { createSlice } from '@reduxjs/toolkit'; // Fixed import

const initialState = {
  plants: [
    {
      id: 1,
      name: 'Monstera Deliciosa',
      price: 34.99,
      category: 'Popular',
      image: 'https://images.pexels.com/photos/6208087/pexels-photo-6208087.jpeg',
      description: 'Large tropical plant with distinctive split leaves'
    },
    {
      id: 2,
      name: 'Snake Plant',
      price: 24.99,
      category: 'Low Maintenance',
      image: 'https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg',
      description: 'Hardy plant that thrives in low light conditions'
    },
    {
      id: 3,
      name: 'Fiddle Leaf Fig',
      price: 49.99,
      category: 'Statement Plants',
      image: 'https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg',
      description: 'Trendy tree with large, violin-shaped leaves'
    },
    {
      id: 4,
      name: 'Pothos',
      price: 19.99,
      category: 'Low Maintenance',
      image: 'https://images.pexels.com/photos/4503271/pexels-photo-4503271.jpeg',
      description: 'Easy-to-grow trailing vine with heart-shaped leaves'
    },
    {
      id: 5,
      name: 'ZZ Plant',
      price: 29.99,
      category: 'Low Maintenance',
      image: 'https://images.pexels.com/photos/4425201/pexels-photo-4425201.jpeg',
      description: 'Nearly indestructible plant with glossy leaves'
    },
    {
      id: 6,
      name: 'Bird of Paradise',
      price: 59.99,
      category: 'Statement Plants',
      image: 'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg',
      description: 'Tropical plant with large, banana-like leaves'
    }
  ],
  categories: ['Popular', 'Low Maintenance', 'Statement Plants'],
  loading: false,
  error: null
};

const plantsSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {
    markAsAdded: (state, action) => {
      const plant = state.plants.find(p => p.id === action.payload);
      if (plant) {
        plant.addedToCart = true;
      }
    }
  }
});

export const { markAsAdded } = plantsSlice.actions;
export default plantsSlice.reducer;