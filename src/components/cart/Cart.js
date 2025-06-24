import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, clearCart } from '../../features/cart/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);
  
  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };
  
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  
  return (
    <div className="cart">
      <h2>Your Cart ({totalQuantity} items)</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} width="50" />
                {item.name} - ${item.price.toFixed(2)} x {item.quantity}
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${totalAmount.toFixed(2)}</p>
          <button onClick={handleClearCart}>Clear Cart</button>
          <button>Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;