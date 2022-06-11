import React from 'react';
import './Item.css';
import image from '../../images/breakfast/breakfast1.png'

const Item = () => {
    return (
          <div className='items'>
            <div className='main-item'>
                <div class="item-area card" style={{width: '18rem'}}>
                <img class="item-image card-img-top" src={image} alt='...'/>
                <div class="card-body">
                    <h5 class="card-title">Bagel and cream cheese</h5>
                    <p class="card-text">How we dream about our future</p>
                    <p className='item-price'>$ 6.99</p>
                </div>
                </div>
            </div>
          </div>
    );
};

export default Item;