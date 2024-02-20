import React, { useContext } from 'react';
import './ProductDisplay.scss';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
  const {product} = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className='productdisplay'>
      <div className="productdisplay__left">
        <div className="productdisplay__left-img_list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay__left-image">
          <img 
            className='productdisplay__left-image--main' 
            src={product.image} 
            alt="" 
          />
        </div>
      </div>
      
      <div className="productdisplay__right">
        <h1>{product.name}</h1>
        <div className="productdisplay__right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay__right-price">
          <div className="productdisplay__right-price_old">
            ${product.old_price}
          </div>

          <div className="productdisplay__right-price_new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay__right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sint quasi 
          quod distinctio quae numquam iusto impedit deleniti incidunt officiis 
          nobis dolores, autem mollitia quas.
        </div>
        <div className="productdisplay__right-size">
          <h1>Select Size</h1>
          <div className="productdisplay__right-sizes">
            <div className="">S</div>
            <div className="">M</div>
            <div className="">L</div>
            <div className="">XL</div>
            <div className="">XXL</div>
          </div>
        </div>
        <button onClick={() => {addToCart(product.id)}}>ADD TO CARD</button>
        <p className='productdisplay__right-category'><span>Category: </span>Women, T-Shirt, Crop Top</p>
        <p className='productdisplay__right-category'><span>Tags: </span>Modern, Latest</p>

      </div>
    </div>
  )
}
