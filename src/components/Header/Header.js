import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header container'>
            <div className='header-fill'>
                <h1>Best food waiting for your belly</h1>
                <div className='search-area'>
                    <div>
                        <input className='search-item' type='text' placeholder='Search food items'></input>
                        <button className='search-button' type='submit'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;