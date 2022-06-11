import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemMenu.css';

const ItemMenu = () => {
    const [items, setItems] = useState([]);
    const fackData = items.slice(0, 6)

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => setItems(data))
    }, []);

    return (
        <div classNameName='cointainer'>
            <div className='eatting-time'>
                <p>Breakfast</p>
                <p>Lunch</p>
                <p>Dinner</p>
            </div>
            <div className='items-area'>
                {
                    fackData.map(item => <Item item={item}></Item>)
                }
            </div>
            <button className='checkout-button'>Checkkout Your Food</button>
        </div>
    );
};

export default ItemMenu;