import React from 'react';
import { useSelector } from 'react-redux';
import HomeCard from '../../HomeCard';

const Home = () => {
    const {product} = useSelector((s) => s);
    return (
        <div className=''>
            <div className="container">
               <div className='flex items-start gap-20 flex-wrap'>
                {
                 product.map((el , idx) => <HomeCard el={el} key={idx}/>)
                }
               </div>
            </div>
        </div>
    );
};

export default Home;