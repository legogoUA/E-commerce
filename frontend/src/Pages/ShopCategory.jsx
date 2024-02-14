import React, { useContext } from 'react';
import './ShopCategory.scss';
import { ShopContext } from '../Context/ShopContext';

export const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);

  return (
    <div className='shop-category'>
      
    </div>
  )
}
