import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Detailcard = () => {
    const {details} = useSelector((s) => s);
    const [more , setMore] = useState(100)

    return (
        <div className='my-[40px]'>
        <div className='container'>
        <div className='flex items-center justify-center gap-20'>
        <img  className='shadow border'src={details.url} width={350}/>
        <div className='flex   flex-col'>
        <h1 className='text-4xl font-medium '>{details.name}</h1>
<h1 className='m-6'>${details.price}</h1>
        <p className='font-seif w-[450px] cursor-pointer'>
            {details.discreption.slice(0 , more)}
            <h1 className='cursor-pointer' onClick={() => setMore(details.discreption.length)} >...Еще</h1>
{
        more > 30 ?      <h1 className='cursor-pointer' onClick={() => setMore(details.discreption.length)} >...Еще</h1> : null
           
}
        </p>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Detailcard;