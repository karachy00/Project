import React from 'react';
import shop from '../../../image/shop.png'
const Shop = () => {
    return (
        <div>
            <div className="container">
            <div className='display-grid'>
                <img src={shop} alt="" />
                <h1 className='absolute top-[220px] left-[666px] text-[36px] font-bold text-green-900 '>Shop</h1>
                </div>
            </div>
        </div>
    );
};

export default Shop;