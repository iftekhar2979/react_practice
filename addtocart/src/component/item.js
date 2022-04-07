import {
  faMinusCircle,
  faPlusCircle,
  faTrashArrowUp
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Item(props) {
  const { title, description, price, img } = props.det;
  return (
    <div className='items-info'>
      <div className='product-img'>
        <img src={img} alt='' />
      </div>
      <div className='title'>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>Price : {price} </p>
      </div>

      <div className='input-quantity'>
        <FontAwesomeIcon icon={faMinusCircle} />
        <input type='text' name='' id='' />
        <FontAwesomeIcon icon={faPlusCircle} />
      </div>
      <div className='price'>
        <h3>{price}</h3>
      </div>
      <div className='remove-item'>
        <FontAwesomeIcon icon={faTrashArrowUp} />
      </div>
    </div>
  );
}

export default Item;
