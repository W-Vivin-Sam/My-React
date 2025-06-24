import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  addItemToCart, 
  removeItemFromCart, 
  deleteItemFromCart 
} from '../features/cart/cartSlice';
import './CartPage.css';

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  const handleIncrease = (item) => {
    dispatch(addItemToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    }));
  };

  const handleDecrease = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteItemFromCart(id));
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      
      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/products" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-summary">
            <p>Total Items: <strong>{totalQuantity}</strong></p>
            <p>Total Cost: <strong>${totalAmount.toFixed(2)}</strong></p>
          </div>
          
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="item-thumbnail"
                />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)} each</p>
                  <p>Total: ${item.totalPrice.toFixed(2)}</p>
                </div>
                
                <div className="item-controls">
                  <div className="quantity-controls">
                    <button 
                      onClick={() => handleDecrease(item.id)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrease(item)}>
                      +
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => handleDelete(item.id)}
                    className="delete-button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-actions">
            <Link to="/products" className="continue-shopping">
              Continue Shopping
            </Link>
            <button 
              onClick={() => alert('Checkout functionality coming soon!')}
              className="checkout-button"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;