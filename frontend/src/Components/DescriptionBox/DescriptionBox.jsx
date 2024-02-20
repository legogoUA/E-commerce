import React from 'react';
import './DescriptionBox.scss';

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox__navigator">
        <div className="descriptionbox__nav-box">Description</div>
        <div className="descriptionbox__nav-box fade">Reviews (122)</div>
      </div>

      <div className="descriptionbox__description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit temporibus nihil quibusdam inventore, 
          suscipit dignissimos quos ipsam laudantium quisquam tempora, adipisci minima atque explicabo eveniet corporis 
          repellendus! Placeat porro ex voluptatem distinctio officia unde deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab distinctio quod temporibus 
          labore ducimus! Mollitia quas debitis dolorum quidem ipsam ut soluta, delectus, esse
          beatae inventore, recusandae rerum at cumque porro quaerat libero id quo.
      </p>
      </div>
    </div>
  )
}
