import React, { useContext } from 'react';
import './CartItems.scss';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

export const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems__format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) 
        {
          return <div className="">
            <div className="cartitems__formation cartitems__format-main">
              <img src={e.image} alt="" className='cartitems__product-icon'/>
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='cartitems__quantity'>{cartItems[e.id]}</button>
              <p>${e.new_price*cartItems[e.id]}</p>
              <img 
                className='cartitems__remove-icon'
                onClick={() => {removeFromCart(e.id)}}
                src={remove_icon} 
                alt="" 
              />
            </div>
            <hr />
          </div>
        }
        return null;
      })}
      <div className="cartitems__down">
        <div className="cartitems__total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems__total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems__total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems__total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems__promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems__promobox">
            <input type="text" placeholder='Promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
