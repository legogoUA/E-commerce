import React from 'react'
import './Item.scss';

export const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item__prices">
        <div className="item__prices-new">
          ${props.new_price}
        </div>
        <div className="item__prices-old">
          ${props.old_price}
        </div>
      </div>
    </div>
  )
}
